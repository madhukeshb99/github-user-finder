import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from './RepoItem'

const Repos = ({ repos }) => {
    if (repos) return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
    return null;
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
