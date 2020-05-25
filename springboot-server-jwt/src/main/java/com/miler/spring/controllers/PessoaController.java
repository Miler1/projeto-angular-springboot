package com.miler.spring.controllers;

//import com.example.demo.repository.PessoaRepository;
import com.miler.spring.models.Pessoa;
import com.miler.spring.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/pessoas")
public class PessoaController {

	@Autowired
	PessoaRepository repository;

	@GetMapping
	public ResponseEntity<List<Pessoa>> getAllPessoas() {
		List<Pessoa> pessoas = new ArrayList<>();
		try {
			repository.findAll().forEach(pessoas::add);
			
			if (pessoas.isEmpty()) {
				System.out.println("Vazio");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			for (Pessoa pessoa : pessoas) {
				System.out.println(pessoa.getNome());
			}
			return new ResponseEntity<>(pessoas, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(path = "{id}")
	public ResponseEntity<Pessoa> getPessoasById(@PathVariable("id") Integer id) {
		Optional<Pessoa> pessoaData = repository.findById(id);

		if (pessoaData.isPresent()) {
			return new ResponseEntity<>(pessoaData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping
	public ResponseEntity<Pessoa> addPessoa(@RequestBody Pessoa pessoa) {

		if (pessoa.getDataNascimento() != null) {
			if (Validacao.CalculaIdade(pessoa.getDataNascimento()) < 18) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
						"Esta pessoa não possui mais de 18 anos");
			}
		}

		if (!Validacao.IsCPF(pessoa.getCpf())) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Cpf Inválido");
		}

		if (Validacao.CheckContatoVazio(pessoa)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Deve ter pelo menos um contato cadastrado");
		}

		if (!Validacao.IsValidEmailAddress(pessoa.getEmail()) && !pessoa.getEmail().isEmpty()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"E-mail inválido");
		}

		try {
			Pessoa _pessoa = repository.save(new Pessoa(pessoa.getNome(),
														pessoa.getCpf(),
														pessoa.getDataNascimento(),
														pessoa.getEndereco(),
														pessoa.getBairro(),
														pessoa.getCidade(),
														pessoa.getUf(),
														pessoa.getCep(),
														pessoa.getEmail(),
														pessoa.getTelefone(),
														pessoa.getSkype()));
			return new ResponseEntity<>(_pessoa, HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e);
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@DeleteMapping(path = "{id}")
	public ResponseEntity<HttpStatus> deletePessoa(@PathVariable("id") Integer id) {
		try {
			repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping(path = "{id}")
	public ResponseEntity<Pessoa> updatePessoa(@PathVariable("id") Integer id, @RequestBody Pessoa pessoa) {
		Optional<Pessoa> pessoaData = repository.findById(id);

		if (Validacao.CalculaIdade(pessoa.getDataNascimento()) < 18) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Esta pessoa não possui mais de 18 anos");
		}

		if (!Validacao.IsCPF(pessoa.getCpf())) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Cpf Inválido");
		}

		if (Validacao.CheckContatoVazio(pessoa)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Deve ter pelo menos um contato cadastrado");
		}

		if (!Validacao.IsValidEmailAddress(pessoa.getEmail()) && !pessoa.getEmail().isEmpty()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"E-mail inválido");
		}

		try {
			if (pessoaData.isPresent()) {
				Pessoa _pessoa = pessoaData.get();
				_pessoa.setNome(pessoa.getNome());
				_pessoa.setCpf(pessoa.getCpf());
				_pessoa.setDataNascimento(pessoa.getDataNascimento());
				_pessoa.setEndereco(pessoa.getEndereco());
				_pessoa.setBairro(pessoa.getBairro());
				_pessoa.setCidade(pessoa.getCidade());
				_pessoa.setUf(pessoa.getUf());
				_pessoa.setCep(pessoa.getCep());
				_pessoa.setEmail(pessoa.getEmail());
				_pessoa.setTelefone(pessoa.getTelefone());
				_pessoa.setSkype(pessoa.getSkype());

				return new ResponseEntity<>(repository.save(_pessoa), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
}
