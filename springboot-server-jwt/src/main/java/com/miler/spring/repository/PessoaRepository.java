package com.miler.spring.repository;

//import com.example.demo.pessoa.Pessoa;
import com.miler.spring.models.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
	List<Pessoa> findById(int age);
}
