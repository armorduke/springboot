package br.med.maisvida.prova.service;

import java.util.List;

import br.med.maisvida.prova.domain.User;

public interface GenericService {
    User findByUsername(String username);

    List<User> findAllUsers();

}
