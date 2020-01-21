package br.gulli.spring.repository;

import org.springframework.data.repository.CrudRepository;

import br.gulli.spring.domain.Job;

public interface JobRepository extends CrudRepository<Job, Long> {

}
