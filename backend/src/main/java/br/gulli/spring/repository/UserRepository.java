package br.gulli.spring.repository;

import org.springframework.data.repository.CrudRepository;

import br.gulli.spring.domain.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
