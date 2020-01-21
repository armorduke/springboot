package br.med.maisvida.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.med.maisvida.prova.domain.Job;

public interface JobRepository extends CrudRepository<Job, Long> {

}
