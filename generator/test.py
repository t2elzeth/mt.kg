from nodejs.bindings import node_run

stderr, stdout = node_run('app.js', '-i', 'test.png', '-noDemo')
print('FINISHED')