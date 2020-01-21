package br.med.maisvida.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.med.maisvida.prova.domain.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
