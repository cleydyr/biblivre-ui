const translations: Record<string, string> = {
  "administration.configuration.title.circulation.lending_receipt.printer.type":
    "Tipo de impressora para recibo de empréstimos",
  "administration.setup.biblivre4restore.newest_backup": "Backup mais recente",
  "administration.accesscards.error.existing_card": "O Cartão ja existe",
  "administration.translations.error.java_locale_not_available":
    "Não existe um identificador de idioma java para o arquivo de traduções",
  "cataloging.bibliographic.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "marc.bibliographic.datafield.306": "Tempo de duração",
  "cataloging.vocabulary.indexing_groups.total": "Total",
  "administration.reports.fieldset.order": "Ordenação",
  "administration.accesscards.change_status.question.uncancel":
    "Deseja realmente recuperar este Cartão?",
  "administration.permissions.title": "Permissões",
  "administration.brief_customization.separators_title":
    "Separadores de subcampo",
  "administration.accesscards.success.delete": "Cartão excluído com sucesso",
  "administration.maintenance.backup.error.invalid_backup_type":
    "O modo de backup selecionado não existe",
  "administration.setup.biblivre3restore.select_file":
    "Selecione um arquivo de backup primeiro",
  "acquisition.quotation.success.delete": "Cotação excluída com sucesso",
  "administration.reports.field.author": "Autor",
  "cataloging.import.page_help":
    "<p>A importação de registros permite expandir sua base de dados sem que haja necessidade de catalogação manual. Novos registros podem ser importados através de pesquisas Z39.50 ou a partir de arquivos exportados por outros sistemas de biblioteconomia.</p>",
  "marc.bibliographic.datafield.550.subfield.x": "Subdivisão geral adotada",
  "search.bibliographic.simple_search": "Pesquisa Bibliográfica Simplificada",
  "marc.bibliographic.datafield.550.subfield.y":
    "Subdivisão cronológica adotada",
  "marc.bibliographic.datafield.550.subfield.z":
    "Subdivisão geográfica adotada",
  "marc.bibliographic.datafield.300": "Descrição física",
  "marc.authorities.datafield.410.subfield.a": "Nome da entidade ou do lugar",
  "acquisition.quotation.title.unit_value": "Valor Unitário",
  "administration.reports.fieldset.dates": "Período",
  "marc.vocabulary.datafield.680": "Nota de escopo (NE)",
  "administration.permissions.items.administration_z3950_search":
    "Listar servidores z3950",
  "marc.vocabulary.datafield.685": "Nota de histórico ou glossário (GLOSS)",
  "administration.user_type.field.lending_time_limit": "Prazo de empréstimo",
  "multi_schema.manage.enable": "Habilitar biblioteca",
  "search.distributed.no_servers":
    'Não é possível realizar uma pesquisa Z39.50 pois não existem bibliotecas remotas cadastradas. Para solucionar este problema, cadastre os servidores Z39.50 das bibliotecas de interesse na opção <em>"Servidores Z39.50"</em> dentro de <em>"Administração"</em> no menu superior. Para isto é necessário um nome de <strong>usuário</strong> e <strong>senha</strong>.',
  "cataloging.holding.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "acquisition.request.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de requisição?",
  "administration.maintenance.backup.label_full": "Backup completo",
  "cataloging.error.no_records_found": "Nenhum registro encontrado",
  "administration.permissions.items.acquisition_quotation_delete":
    "Excluir registro de cotação",
  "marc.bibliographic.datafield.310": "Periodicidade Corrente",
  "cataloging.tab.record.custom.field_label.biblio_041": "Idioma",
  "cataloging.tab.record.custom.field_label.biblio_043": "Código geográfico",
  "cataloging.tab.record.custom.field_label.biblio_045": "Código cronológico",
  "marc.vocabulary.datafield.750.indicator.2.0":
    "Library of Congress Subject Headings",
  "marc.vocabulary.datafield.670": "Nota de origem do termo",
  "cataloging.import.records_found_singular": "{0} registro encontrado",
  "administration.configuration.new_value": "Novo valor",
  "cataloging.vocabulary.confirm_delete_record_title":
    "Excluir registro de vocabulário",
  "marc.bibliographic.datafield.321": "Peridiocidade Anterior",
  "circulation.lending.renew_success": "Empréstimo renovado com sucesso",
  "marc.bibliographic.datafield.530.subfield.a":
    "Notas de disponibilidade de forma física",
  "administration.configuration.original_value": "Valor original",
  "acquisition.order.field.delivery_time": "Prazo de entrega (Prometido)",
  "marc.bibliographic.datafield.310.subfield.b":
    "Data da periodicidade corrente",
  "marc.bibliographic.datafield.310.subfield.a": "Periodicidade Corrente",
  "administration.permissions.items.circulation_access_control_bind":
    "Gerenciar controle de acesso",
  "marc.bibliographic.datafield.590.subfield.a": "Notas locais",
  "administration.z3950.no_server_found": "Nenhum servidor z39.50 encontrado",
  "marc.holding.datafield.541": "Nota sobre a fonte de aquisição",
  "administration.permissions.items.administration_reports": "Gerar Relatórios",
  "administration.permissions.items.administration_restore":
    "Recuperar cópia de segurança da base de dados",
  "administration.accesscards.change_status.title.unblock":
    "Desbloquear Cartão",
  "administration.setup.biblivre3restore.success.description":
    "Backup restaurado com sucesso",
  "cataloging.authorities.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "marc.vocabulary.datafield.750.indicator.2.4": "Source not specified",
  "multi_schema.configuration.description.general.subtitle":
    "Subtítulo que será exibido quando a página principal deste grupo de bibliotecas for acessada. Esta página listará todas as bibliotecas cadastradas neste grupo (gerenciadas pelo mesmo Biblivre 5).",
  language_name: "Português (Brasil)",
  "cataloging.authorities.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de autoridade?",
  "administration.reports.option.dewey": "Classificação Decimal Dewey",
  "marc.bibliographic.datafield.550.subfield.a": "Termo tópico adotado",
  "administration.permissions.groups.login": "Login",
  "cataloging.bibliographic.automatic_holding_title": "Exemplares Automáticos",
  "acquisition.supplier.confirm_delete_record_title":
    "Excluir registro de fornecedor",
  "administration.configuration.description.general.psql_path":
    "Atenção: Esta é uma configuração avançada, porém importante. O Biblivre tentará encontrar automaticamente o caminho para o programa <strong>psql</strong> e, exceto em casos onde seja exibido um erro abaixo, você não precisará alterar esta configuração. Esta configuração representa o caminho, no servidor onde o Biblivre está instalado, para o executável <strong>psql</strong> que é distribuído junto do PostgreSQL. Caso esta configuração estiver inválida, o Biblivre não será capaz de gerar e restaurar cópias de segurança.",
  "administration.maintenance.backup.button_full": "Gerar backup completo",
  "marc.bibliographic.datafield.750.subfield.z": "Subdivisão geográfica",
  "search.bibliographic.advanced_search": "Pesquisa Bibliográfica Avançada",
  "error.invalid_handler":
    "Não foi possível encontrar um handler para esta ação",
  "marc.bibliographic.datafield.730.subfield.x": "Subdivisão geral",
  "marc.bibliographic.datafield.750.subfield.x": "Subdivisão geral",
  "marc.bibliographic.datafield.730.subfield.y": "Subdivisão cronológico",
  "marc.bibliographic.datafield.750.subfield.y": "Subdivisão cronológica",
  "marc.bibliographic.datafield.730.subfield.z": "Subdivisão geográfico",
  "administration.setup.biblivre4restore.description":
    "Use esta opção caso você queira restaurar um backup existente do Biblivre 4. Caso o Biblivre encontre backups salvos em seus documentos, você poderá restaurá-los diretamente da lista abaixo. Caso contrário, você deverá enviar um arquivo de backup (extensão <strong>.b4bz</strong> ou <strong>.b5bz</strong>) através do formulário.",
  "warning.download_site": "Ir para o site de downloads",
  "warning.fix_now": "Resolver este problema",
  "administration.maintenance.backup.error.psql_not_found":
    "PSQL não encontrado",
  "administration.maintenance.reindex.wait":
    "Dependendo do tamanho da base de dados, esta operação poderá demorar. O biblivre ficará indisponível durante o processo, que pode durar até 15 minutos.",
  "marc.bibliographic.datafield.740":
    "Entrada secundária - Título Adicional - Analítico",
  "cataloging.tab.record.custom.field_label.biblio_095":
    "Área do conhecimento do CNPq",
  "marc.bibliographic.datafield.210.indicator.1.0":
    "Não gerar entrada secundária de título",
  "marc.bibliographic.datafield.210.indicator.1.1":
    "Gerar entrada secundária de título",
  "cataloging.holding.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de exemplar?",
  "multi_schema.configurations.page_help":
    'A rotina de Configurações de Multi-bibliotecas permite alterar configurações globais do grupo de bibliotecas e configurações padrão que serão usadas pelas bibliotecas cadastradas. Todas as configurações marcadas com um asterisco (*) serão usadas por padrão em novas bibliotecas cadastradas neste grupo, mas podem ser alteradas internamente pelos administradores, através da opção <em>"Administração"</em>, <em>"Configurações"</em>, no menu superior.',
  "cataloging.database.title": "Base de dados selecionada",
  "administration.translations.error.javascript_locale_not_available":
    "Não existe um identificador de idioma javascript para o arquivo de traduções",
  "acquisition.supplier.success.delete": "Fornecedor excluído com sucesso",
  "search.distributed.issn": "ISSN (incluindo hífens)",
  "marc.bibliographic.datafield.750": "Termo tópico",
  "administration.setup.biblivre3import.confirm_title":
    "Importar dados do Biblivre 3",
  "acquisition.quotation.title.requisition": "Requisição",
  "administration.reports.label.example": "ex.",
  "administration.setup.biblivre3restore.description":
    "Use esta opção caso você queira restaurar e importar um backup existente do Biblivre 3.",
  "administration.setup.page_help":
    "Seja bem-vindo! Esta tela é o último passo antes de iniciar o uso do Biblivre V e através dela você poderá escolher se irá restaurar as informações de outra instalação do biblivre (através de um backup ou da migração do Biblivre 3) ou se deseja iniciar uma biblioteca nova. Leia atentamente cada uma das opções abaixo e selecione a mais apropriada.",
  "search.common.operator.or": "ou",
  "administration.accesscards.error.existing_cards":
    "Os seguintes Cartões já existem:",
  "administration.accesscards.status.in_use": "Em uso",
  "administration.reports.field.year": "Ano",
  "cataloging.tab.record.custom.field_label.biblio_090": "Localização",
  "acquisition.quotation.success.save": "Cotação incluída com sucesso",
  "administration.maintenance.reinstall.confirm.title":
    "Ir para a tela de restauração e reconfiguração",
  "acquisition.quotation.field.quotation_date": "Data do Pedido de Cotação",
  "circulation.custom.user_field.select.default": "Selecione uma opção",
  "administration.configuration.description.general.title":
    "Esta configuração representa o nome da biblioteca, que será exibido no topo das páginas do Biblivre e nos relatórios.",
  "cataloging.upload_popup.title": "Enviando Arquivo",
  "search.bibliographic.subject": "Assunto",
  "marc.bibliographic.datafield.750.indicator.1": "Nível do assunto",
  "marc.bibliographic.datafield.750.indicator.2": "Tesauro",
  "multi_schema.configuration.title.general.title":
    "Nome deste Grupo de Bibliotecas",
  "marc.bibliographic.datafield.710.indicator.2": "Tipo de entrada secundária",
  "cataloging.database.trash_full": "Lixeira",
  "marc.bibliographic.datafield.710.indicator.1": "Forma de entrada",
  "circulation.error.delete.user_has_lendings":
    "Este usuário possui empréstimos ativos.  Realize a devolução antes de excluir este usuário.",
  "marc.bibliographic.datafield.080.subfield.2": "Número de edição da CDU",
  "marc.bibliographic.datafield.400.subfield.a":
    "Sobrenome e/ou Prenome do Autor",
  "marc.material_type.object_3d": "Objeto 3D",
  "administration.reports.field.amount": "Quantidade",
  "marc.bibliographic.datafield.610.indicator.1": "Forma de entrada",
  "search.distributed.title": "Título",
  "administration.reports.field.holdings_count": "Qtdd. Exemplares",
  "cataloging.tab.record.custom.field_label.biblio_080": "CDU",
  "login.error.invalid_password":
    'O campo "senha atual" não confere com a sua senha',
  "circulation.lending.receipt.return_date": "Data de devolução",
  "cataloging.tab.record.custom.field_label.biblio_082": "CDD",
  "cataloging.import.save.success": "Registros importados com successo",
  "administration.permissions.items.cataloging_authorities_move":
    "Mover registro de autoridade",
  "cataloging.bibliographic.confirm_delete_record_question":
    "Você realmente deseja excluir este registro bibliográfico?",
  "common.wait": "Aguarde",
  "cataloging.database.record_deleted": "Registro excluído definitivamente",
  "acquisition.order.confirm_cancel_editing_title":
    "Cancelar edição de registro de Pedido",
  "cataloging.authorities.confirm_cancel_editing_title":
    "Cancelar edição de registro de autoridade",
  "multi_schema.select_restore.description_found_backups":
    "Abaixo estão os backups encontrados na pasta <strong>{0}</strong> do servidor Biblivre. Clique sobre o backup para ver a lista de opções de restauração disponíveis.",
  "marc.bibliographic.datafield.130.subfield.p":
    "Nome da parte - seção da obra",
  "search.common.library": "Biblioteca",
  "acquisition.quotation.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de cotação?",
  "administration.maintenance.backup.label_exclude_digital_media":
    "Backup sem arquivos digitais",
  "administration.permissions.groups.acquisition": "Aquisição",
  "administration.reports.select_report": "Selecione um Relatório",
  "cataloging.holding.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "administration.configuration.title.general.default_language":
    "Idioma padrão",
  "administration.reports.select.option.holdings":
    "Relatório de Cadastro de Exemplares",
  "administration.setup.biblivre3import.confirm_description":
    "Você realmente deseja importar os dados do Biblivre 3?",
  "common.save": "Salvar",
  "cataloging.import.import_popup.importing":
    "Importando registros, por favor, aguarde",
  "marc.authorities.datafield.100.indicator.1.0": "prenome simples ou composto",
  "cataloging.authorities.confirm_delete_record_title":
    "Excluir registro de autoridade",
  "menu.cataloging_import": "Importação de Registros",
  "search.bibliographic.select_item_button": "Selecionar registro",
  "marc.authorities.datafield.100.indicator.1.3": "nome de família",
  "marc.authorities.datafield.100.indicator.1.1":
    "sobrenome simples ou composto",
  "marc.authorities.datafield.100.indicator.1.2":
    "sobrenome composto (obsoleto)",
  "administration.reports.field_count.description":
    "<p>Após selecionar o campo Marc e a Ordenação, realize a pesquisa bibliográfica que servirá de base para o relatório, ou clique em <strong>Emitir Relatório</strong> para utilizar toda a base bibliográfica.</p>\n<p><strong>Atenção:</strong> Este relatório pode levar alguns minutos para ser gerado, dependendo do tamanho da base bibliográfica.</p>",
  "marc.vocabulary.datafield.360.subfield.a": "Termo tópico adotado",
  "acquisition.order.selected_records_singular": "{0} Valor Adicionado",
  "administration.maintenance.backup.backup_never_downloaded":
    "Este backup nunca foi baixado",
  "administration.reports.field.biblio_reservation":
    "Reservas por registro bibliográfico",
  "administration.maintenance.backup.error.invalid_restore_path":
    "O diretório configurado para restauração dos arquivos de backup não é valido",
  "administration.user_type.field.lending_limit":
    "Limite de empréstimos simultâneos",
  "acquisition.order.fieldset.title.values": "Valores",
  "administration.reports.field.location": "Localização",
  "administration.setup.biblivre4restore.select_file":
    "Selecione um arquivo de backup do Biblivre 5",
  "circulation.lending.lending_date": "Data do empréstimo",
  "circulation.reservation.users.title": "Pesquisar Leitor",
  "acquisition.supplier.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de fornecedor?",
  "acquisition.supplier.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "marc.bibliographic.datafield.130.subfield.d":
    "Data que aparece junto ao título uniforme na entrada",
  "cataloging.bibliographic.confirm_remove_attachment_description":
    "Você deseja excluir esse arquivo digital?",
  "marc.bibliographic.datafield.130.subfield.g": "Informações adicionais",
  "cataloging.authorities.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "marc.bibliographic.datafield.130.subfield.f":
    "Data de edição do item que está sendo processado",
  "marc.bibliographic.datafield.730.subfield.a":
    "Título uniforme atribuído ao documento",
  "marc.bibliographic.datafield.130.subfield.a": "Título uniforme",
  "field.error.date":
    "O valor preenchido não é uma data válida. Utilize o formato {0}",
  "marc.bibliographic.datafield.210.indicator.1":
    "Entrada secundária de título",
  "cataloging.bibliographic.search.holding_id": "Código de barras da etiqueta",
  "marc.bibliographic.datafield.210.indicator.2": "Tipo de Título",
  "marc.bibliographic.datafield.730.subfield.d":
    "Data que aparece junto ao título uniforme de entrada",
  "acquisition.quotation.confirm_cancel_editing_title":
    "Cancelar edição de registro de cotação",
  "marc.vocabulary.datafield.360.subfield.x": "Subdivisão geral adotada",
  "marc.bibliographic.datafield.130.subfield.l": "Língua do texto",
  "marc.vocabulary.datafield.360.subfield.y": "Subdivisão cronológica adotada",
  "marc.bibliographic.datafield.130.subfield.n":
    "Número da parte - seção da obra",
  "marc.bibliographic.datafield.130.subfield.k": "Subcabeçalhos",
  "marc.vocabulary.datafield.360.subfield.z": "Subdivisão geográfica adotada",
  "administration.reports.title.holdings_creation_by_date":
    "Relatório de Total de Inclusões de Obras por Período",
  "marc.bibliographic.datafield.730.subfield.p":
    "Nome da parte - Seção da obra",
  "cataloging.bibliographic.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "search.user.open_item_button": "Abrir cadastro",
  "cataloging.tab.record.custom.field_label.vocabulary_913": "Código Local",
  "marc.bibliographic.datafield.730.subfield.f":
    "Data da edição do item que está sendo processado",
  "marc.bibliographic.datafield.730.subfield.g": "Informações adicionais",
  "acquisition.order.error.order_not_found":
    "Não foi possível encontrar o pedido",
  "circulation.lending.button.print_return_receipt":
    "Imprimir recibo de devolução",
  "marc.holding.datafield.949": "Tombo Patrimonial",
  "cataloging.tab.record.custom.field_label.authorities_100": "Autor",
  "marc.bibliographic.datafield.730.subfield.k": "Subcabeçalhos",
  "marc.bibliographic.datafield.730.subfield.l":
    "Língua do texto. Idioma do texto por extenso",
  "cataloging.labels.popup.description":
    "Selecione em qual etiqueta deseja iniciar a impressão",
  "menu.multi_schema_backup": "Backup e Restauração",
  "marc.bibliographic.datafield.830.indicator.2":
    "Número de caracteres a serem desprezados na alfabetação",
  "marc.authorities.datafield.400": "Outra forma do nome",
  "administration.accesscards.confirm_delete_record_title.forever":
    "Excluir Cartão de Acesso",
  "administration.reports.field.isbn": "ISBN",
  "cataloging.tabs.marc": "MARC",
  "acquisition.supplier.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "multi_schema.manage.new_schema.title": "Criação de Nova Biblioteca",
  "circulation.custom.user_field.gender.1": "Masculino",
  "marc.authorities.datafield.410": "Outra forma do nome",
  "circulation.custom.user_field.gender.2": "Feminino",
  "circulation.user.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este usuário?",
  "marc.bibliographic.datafield.340": "Suporte físico",
  "circulation.lending.buttons.apply_fine": "Multar",
  "marc.bibliographic.datafield.342": "Dados de referência geospacial",
  "marc.bibliographic.datafield.343": "Dados de coordenada plana",
  "administration.configuration.printer_type.printer_40_columns":
    "Impressora 40 colunas",
  "search.vocabulary.page_help":
    "<p>A pesquisa de vocabulário permite recuperar informações sobre os termos presentes no acervo desta biblioteca, caso catalogados.</p>\n<p>A pesquisa buscará cada um dos termos digitados nos seguintes campos: <em>{0}</em>.</p>\n<p>As palavras são pesquisadas em sua forma completa, porém é possível usar o caractere asterisco (*) para buscar por palavras incompletas, de modo que a pesquisa <em>'brasil*'</em> encontre registros que contenham <em>'brasil'</em>, <em>'brasilia'</em> e <em>'brasileiro'</em>, por exemplo. Aspas duplas podem ser usadas para encontrar duas palavras em sequência, de modo que a pesquisa <em>\"meu amor\"</em> encontre registros que contenham as duas palavras juntas, mas não encontre registros com o texto <em>'meu primeiro amor'</em>.</p>",
  "circulation.users.success.block": "Usuário bloqueado com sucesso",
  "search.user.name_or_id": "Nome ou Matrícula",
  "search.holding.availability": "Disponibilidade",
  "cataloging.bibliographic.indexing_groups.isrc": "ISRC",
  "administration.accesscards.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este Cartão?",
  "administration.maintenance.reindex.error.invalid_record_type":
    "Tipo de registro em branco ou desconhecido",
  "circulation.user.users_without_user_card":
    "Listar apenas usuários que nunca tiveram carteirinha impressa",
  "administration.accesscards.prefix": "Prefixo",
  "acquisition.quotation.field.delivery_time": "Prazo de entrega (Prometido)",
  "cataloging.bibliographic.indexing_groups.issn": "ISSN",
  "administration.setup.biblivre4restore.error.digital_media_only_should_be_selected":
    "O segundo arquivo de backup selecionado não contém apenas arquivos digitais",
  "acquisition.quotation.field.supplier_select": "Selecione um Fornecedor",
  "circulation.user_cards.popup.title": "Formato das etiquetas",
  "marc.bibliographic.datafield.630.indicator.1":
    "Número de caracteres a serem desprezados na alfabetação",
  "multi_schema.configurations.error.disable_multi_schema_schema_count":
    "Não é possível desabilitar o sistema de multi-bibliotecas enquanto houver mais de uma biblioteca habilitada.",
  "multi_schema.configuration.title.general.subtitle":
    "Subtítulo deste Grupo de Bibliotecas",
  "marc.bibliographic.datafield.240.subfield.p":
    "Nome da parte - seção da obra",
  "marc.bibliographic.datafield.360":
    "Remissiva VT (ver também) e TA (termo relacionado ou associado)",
  "administration.form_customization.subfield_collapsed": "Oculto",
  "marc.bibliographic.datafield.362":
    "Informação de Datas de Publicação e/ou Volume",
  "administration.reports.field.user_list_by_type":
    "Lista de Usuários Por Tipo",
  "circulation.lending.fine_value": "Valor da multa",
  "marc.bibliographic.datafield.240.subfield.f": "Data do trabalho",
  "acquisition.order.field.supplier": "Fornecedor",
  "marc.bibliographic.datafield.240.subfield.g": "Informações adicionais",
  "marc.bibliographic.datafield.240.subfield.b":
    "Data que aparece junto ao título uniforme na entrada",
  "marc.bibliographic.datafield.240.subfield.a": "Título uniforme",
  "marc.bibliographic.datafield.240.subfield.n":
    "Número da parte - seção da obra",
  "administration.configuration.description.cataloging.accession_number_prefix":
    "O tombo patrimonial é o campo que identifica unicamente um exemplar. No Biblivre, a regra de formação para o tombo patrimonial depende do ano de aquisição do exemplar, da quantidade de exemplares adquiridos no ano e do prefixo do tombo patrimonial. Este prefixo é o termo que será inserido antes da numeração de ano, no formato <prefixo>.<ano>.<contador> (Ex: Bib.2014.7).",
  "marc.bibliographic.datafield.240.subfield.l": "Língua do texto",
  "marc.bibliographic.datafield.730.indicator.2": "Tipo de entrada secundária",
  "marc.bibliographic.datafield.240.subfield.k": "Subcabeçalhos",
  "marc.bibliographic.datafield.730.indicator.1":
    "Número de caracteres a serem desprezados na alfabetação",
  "search.authorities.page_help":
    "<p>A pesquisa de autoridades permite recuperar informações sobre os autores presentes no acervo desta biblioteca, caso catalogados.</p>\n<p>A pesquisa buscará cada um dos termos digitados nos seguintes campos: <em>{0}</em>.</p>\n<p>As palavras são pesquisadas em sua forma completa, porém é possível usar o caractere asterisco (*) para buscar por palavras incompletas, de modo que a pesquisa <em>'brasil*'</em> encontre registros que contenham <em>'brasil'</em>, <em>'brasilia'</em> e <em>'brasileiro'</em>, por exemplo. Aspas duplas podem ser usadas para encontrar duas palavras em sequência, de modo que a pesquisa <em>\"meu amor\"</em> encontre registros que contenham as duas palavras juntas, mas não encontre registros com o texto <em>'meu primeiro amor'</em>.</p>",
  "administration.form_customization.subfield_autocomplete.fixed_table_with_previous_values":
    "Tabela e Valores",
  "circulation.access_control.card_available": "Este cartão está disponível",
  "circulation.lending.button.print_receipt": "Imprimir recibo",
  "multi_schema.manage.error": "Erro",
  "search.bibliographic.isbn": "ISBN",
  "marc.bibliographic.datafield.949.subfield.a": "Tombo patrimonial",
  "acquisition.order.field.quotation_select": "Selecione uma Cotação",
  "administration.reports.field.place": "Local",
  "multi_schema.restore.limit.description":
    "O arquivo selecionado possui um número muito grande de bibliotecas. Por limites do banco de dados, a restauração deverá ser feita em passos, de no máximo 20 bibliotecas por passo. Clique nos links abaixo para listar as bibliotecas desejadas, e selecione as bibliotecas que serão restauradas. Repita esse procedimento até que todas as bibliotecas desejadas tenham sido restauradas.",
  "marc.authorities.datafield.100.indicator.1": "Forma de entrada",
  "administration.setup.biblivre4restore.button":
    "Restaurar backup selecionado",
  "marc.bibliographic.datafield.110.indicator.1.2": "nome na ordem direta",
  "marc.bibliographic.datafield.110.indicator.1.1": "nome da jurisdição",
  "administration.setup.biblivre3restore.success": "Restauração de Backup",
  "marc.bibliographic.datafield.110.indicator.1.0": "nome invertido",
  "circulation.user_cards.selected_records_plural": "{0} usuários selecionados",
  "marc.bibliographic.datafield.710.indicator.1.2": "nome na ordem direta",
  "marc.bibliographic.datafield.710.indicator.1.0": "nome invertido",
  "marc.bibliographic.datafield.710.indicator.1.1": "nome da jurisdição",
  "administration.setup.biblivre3import.success.description":
    "Dados importados com sucesso",
  "acquisition.request.confirm_cancel_editing_title":
    "Cancelar edição de registro de requisição",
  "cataloging.holding.error.accession_number_unavailable":
    "Este tombo patrimonial já está em uso por outro exemplar. Por favor, preencha outro valor ou deixe em branco para que o sistema calcule um automaticamente.",
  "administration.accesscards.error.no_card_found": "Nenhum cartão encontrado",
  "menu.administration_brief_customization":
    "Personalização de Resumo Catalográfico",
  "acquisition.quotation.title.quantity": "Quantidade",
  "cataloging.bibliographic.indexing_groups.year": "Ano",
  "cataloging.tab.record.custom.field_label.biblio_852": "Notas públicas",
  "acquisition.quotation.field.unit_value": "Valor Unitário",
  "administration.reports.select.option.select_marc_field":
    "Selecione um campo Marc",
  "login.password.success": "Senha alterada com sucesso",
  "administration.accesscards.add_one_card": "Cadastrar Novo Cartão",
  "multi_schema.configurations.error.disable_multi_schema_outside_global":
    "Não é possível desabilitar o sistema de multi-bibliotecas de dentro de uma biblioteca.",
  "cataloging.bibliographic.confirm_delete_record_title":
    "Excluir registro bibliográfico",
  "marc.holding.datafield.090": "Número de chamada / Localização",
  "administration.permissions.items.digitalmedia_upload":
    "Enviar mídia digital",
  "acquisition.order.title.title": "Título",
  "administration.configuration.description.general.subtitle":
    "Esta configuração representa um subtítulo para a biblioteca, que será exibido no topo das páginas do Biblivre, logo abaixo do <strong>Nome da biblioteca</strong>. Esta configuração é opcional.",
  "administration.reports.fieldset.field_count": "Contagem por campo Marc",
  "circulation.lending.fine_popup.title": "Devolução em atraso",
  "administration.setup.biblivre4restore.success": "Restauração de Backup",
  "circulation.accesscards.lend.success": "Cartão vinculado com sucesso",
  "marc.bibliographic.datafield.110.indicator.1": "Forma de entrada",
  "cataloging.record.error.delete": "Falha ao exluir o Registro",
  "administration.configuration.description.search.results_per_page":
    "Esta configuração representa a quantidade máxima de resultados que serão exibidas em uma única página nas pesquisas do sistema. Um número muito grande poderá deixar o sistema mais lento.",
  "administration.reports.field.database_main": "Principal",
  "cataloging.vocabulary.indexing_groups.up_term": "Termo Use Para (UP)",
  "cataloging.database.record_count":
    "Registros nesta base: <strong>{0}</strong>",
  "multi_schema.manage.drop_schema.confirm_description":
    "Você realmente deseja excluir esta biblioteca?",
  "marc.vocabulary.datafield.913.subfield.a": "Código local",
  "text.main.noscript": "",
  "search.distributed.page_help":
    '<p>A pesquisa distribuída permite recuperar informações sobre registros em acervos de outras bibliotecas, que disponibilizam seus registros para pesquisa e catalogação colaborativa.</p>\n<p>Para realizar uma pesquisa, preencha os termos da pesquisa, selecionando o campo de interesse. Em seguida, selecione uma ou mais bibliotecas onde os registros deverão ser localizados. <span class="warn">Atenção: selecione poucas bibliotecas para evitar que a busca distribuída fique muito lenta, visto que ela depende da comunicação entre as bibliotecas e o tamanho de cada acervo.</span></p>',
  "administration.maintenance.reindex.success":
    "Reindexação concluída com sucesso",
  "menu.cataloging_label": "Etiquetas",
  "cataloging.import.marc_popup.description":
    "Use a caixa abaixo para alterar o MARC deste registro antes de importá-lo.",
  "circulation.users.failure.unblock": "Falha ao desbloquear o Usuário",
  "cataloging.tab.record.custom.field_label.biblio_830": "Título uniforme",
  "cataloging.bibliographic.button.new_holding": "Novo exemplar",
  "administration.configurations.error.value_must_be_numeric":
    "O valor deste campo deve ser um número",
  "label.username": "Usuário",
  "circulation.accesscards.bind_card": "Vincular Cartão",
  "circulation.user_status.active": "Ativo",
  "administration.change_password.new_password": "Nova senha",
  "acquisition.request.success.save": "Requisição incluída com sucesso",
  "administration.accesscards.change_status.title.uncancel": "Recuperar Cartão",
  "cataloging.holding.availability.unavailable": "Indisponível",
  "circulation.custom.user_field.address_state": "Estado",
  "marc.bibliographic.datafield.490.indicator.1":
    "Política de desdobramento de série",
  "cataloging.bibliographic.indexing_groups.title": "Título",
  "marc.bibliographic.datafield.490.indicator.2": "",
  "circulation.users.failure.disable": "Falha ao marcar usuário como inativo",
  "cataloging.tab.record.custom.field_label.vocabulary_040":
    "Fonte de catalogação",
  "administration.usertype.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este Tipo de Usuário?",
  "administration.accesscards.change_status.title.cancel": "Cancelar Cartão",
  "administration.translations.page_help":
    '<p>O módulo de <strong>"Traduções"</strong> permite adicionar novos idiomas ao Biblivre 5 ou alterar os textos já existentes.</p>\n<p><strong>Atenção: Este módulo realiza configurações avançadas do Biblivre 5, e deve ser utilizado apenas por Usuários avançados, com experiência em informática.</strong>.</p>\n<p>Para adicionar um novo idioma, baixe o arquivo de idioma em Português, faça a tradução dos textos e depois faça o envio do arquivo. Lembre-se que apenas os <strong>textos</strong> (depois do sinal de igual) devem ser alterados.  Não altere as chaves, ou o Biblivre 5 não conseguirá localizar o texto</p>\n<p>Exemplo: digamos que você queira alterar o texto no menu principal de <i>Pesquisa</i> para <i>Busca</i>.  Você deverá então baixar o arquivo do idioma e alterar a seguinte linha:</p>\n<p><strong>*menu.search</strong> = Pesquisa</p>\n<p>Para:</p>\n<p><strong>*menu.search</strong> = Busca</p>\n<p>E então fazer o Envio do arquivo de idiomas. O Biblivre 5 irá processar o arquivo, e alterar o texto do menu.</p>',
  "cataloging.tab.record.custom.field_label.authorities_111": "Autor Evento",
  "cataloging.tab.record.custom.field_label.authorities_110": "Autor",
  "administration.reports.field.user_count_by_type":
    "Totais por Tipos de Usuários",
  "administration.reports.fieldset.database": "Base de Dados",
  "common.edit": "Editar",
  "menu.circulation_user_cards": "Impressão de Carteirinhas",
  "circulation.lending.button.return": "Devolver",
  "cataloging.vocabulary.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "circulation.user.button.unblock": "Desbloquear",
  "search.common.operator.and": "e",
  "cataloging.tab.record.custom.field_label.biblio_411": "Outra forma do nome",
  "marc.bibliographic.datafield.024.indicator.1.0":
    "International Standard Recording Code (ISRC)",
  "administration.permissions.items.administration_z3950_save":
    "Salvar registro de servidor z3950",
  "cataloging.tab.record.custom.field_label.biblio_410": "Outra forma do nome",
  "marc.bibliographic.datafield.024.indicator.1.2":
    "International Standard Music Number (ISMN)",
  "acquisition.order.field.created_by": "Responsável",
  "cataloging.bibliographic.selected_records_plural":
    "{0} registros selecionados",
  "acquisition.request.field.title": "Título Principal",
  "circulation.user.tabs.lendings": "Empréstimos",
  "cataloging.labels.popup.title": "Formato das etiquetas",
  "marc.bibliographic.datafield.730.indicator.2.2": "entrada analítica",
  "search.common.containing_text": "Contendo o texto",
  "administration.migration.groups.reservations": "Reservas",
  "cataloging.authorities.author_type.100": "Pessoa",
  "circulation.user_status.pending_issues": "Possui pendências",
  "cataloging.tab.record.custom.field_label.biblio_400": "Outra forma do nome",
  "marc.material_type.book": "Livro",
  "administration.reports.title.user_creation_count":
    "Total de Inclusões Por Usuário",
  "administration.accesscards.error.delete": "Falha ao exluir o Cartão",
  "cataloging.import.import_popup.title": "Importando Registros",
  "marc.authorities.datafield.111.indicator.1": "Forma de entrada",
  "circulation.user.button.inactive": "Marcar como inativo",
  "search.common.next": "Próximo",
  "cataloging.database.work": "Trabalho",
  "circulation.users.success.save": "Usuário incluído com sucesso",
  "marc.bibliographic.datafield.730.indicator.2._":
    "nenhuma informação fornecida",
  "circulation.lending.receipt.holding_id": "Nro. Registro",
  "circulation.lending.receipt.returns": "Devoluções",
  "cataloging.authorities.author_type.111": "Evento",
  "cataloging.authorities.author_type.110": "Entidade Coletiva",
  "marc.bibliographic.datafield.020.subfield.a": "Número do ISBN",
  "marc.bibliographic.datafield.020.subfield.c": "Modalidade de aquisição",
  "cataloging.bibliographic.button.save": "Salvar",
  "cataloging.tab.record.custom.field_label.biblio_876":
    "Nota de acesso restrito",
  "circulation.user.confirm_delete_record_question.inactive":
    'Você realmente deseja marcar este usuário como "inativo"?',
  "circulation.user.active_lendings": "Empréstimos ativos",
  "menu.administration_user_types": "Tipos de Usuário",
  "circulation.user.users_with_late_lendings":
    "Listar apenas usuários com empréstimos em atraso",
  "marc.bibliographic.datafield.700": "Entrada secundária - Nome pessoal",
  "acquisition.supplier.field.supplier_number": "CNPJ",
  "menu.circulation_access": "Controle de Acesso",
  "administration.reports.field.user_returned_lendings":
    "Histórico de Devoluções",
  "search.bibliographic.issn": "ISSN",
  "search.bibliographic.holdings_available": "Disponíveis",
  "marc.bibliographic.datafield.080.subfield.a": "Número de Classificação",
  "administration.maintenance.backup.warning":
    "Este processo pode demorar alguns minutos, dependendo da configuração de hardware do seu servidor.",
  "circulation.user.fine.pending": "Pendente",
  "administration.brief_customization.aggregators.right-parenthesis":
    "Fecha parênteses",
  "administration.setup.biblivre3migration": "Importar dados do Biblivre 3",
  "marc.bibliographic.datafield.255.subfield.a": "Escala",
  "cataloging.bibliographic.indexing_groups.all": "Qualquer campo",
  "circulation.error.delete.user_has_accesscard":
    "Este usuário possui cartão de acesso em uso.  Realize a devolução do cartão antes de excluir este usuário.",
  "marc.bibliographic.datafield.710": "Entrada secundária - Entidade Coletiva",
  "multi_schema.configuration.description.general.title":
    "Nomo que será exibido quando a página principal deste grupo de bibliotecas for acessada. Esta página listará todas as bibliotecas cadastradas neste grupo (gerenciadas pelo mesmo Biblivre 5).",
  "marc.bibliographic.datafield.711": "Entrada secundária - Evento",
  "cataloging.authorities.indexing_groups.total": "Total",
  "administration.brief_customization.confirm_disable_datafield_question":
    "Marcando esta opção você estará escondendo o campo na aba de Resumo Catalográfico. Você poderá exibir o mesmo novamente depois, caso mude de idéia.",
  "administration.configuration.description.general.business_days":
    "Esta configuração representa os dias de funcionamento da biblioteca e será usada pelos módulos de empréstimo e reserva. O principal uso desta configuração é evitar que a devolução de um exemplar seja agendada para um dia em que a biblioteca está fechada.",
  "administration.accesscards.simple_term_title": "Preencha o Código do Cartão",
  "acquisition.order.field.total_value": "Valor total",
  "search.bibliographic.publication_year": "Ano de publicação",
  "menu.help_faq": "Perguntas Frequentes",
  "acquisition.supplier.field.area": "Bairro",
  "cataloging.bibliographic.automatic_holding.holding_volume_count":
    "Quantidade de volumes da Obra",
  "acquisition.request.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este registro de requisição?",
  "search.common.search_limit":
    "A pesquisa realizada encontrou {0} registros, porém apenas os {1} primeiros serão exibidos",
  "administration.reports.field.user_status.active": "Ativo",
  "error.invalid_method_call": "Chamada a método inválido",
  "circulation.access_control.card_in_use": "Cartão em uso",
  "administration.reports.select.option.lendings":
    "Relatório de Empréstimos por Período",
  "acquisition.order.field.terms_of_payment": "Forma de pagamento",
  "administration.reports.select.option.summary": "Sumário do Catálogo",
  "administration.brief_customization.available_fields.description":
    "Os campos abaixo estão configurados no Formulário Catalográfico, porém não serão exibidos no Resumo Catalográfico.",
  "text.multi_schema.select_library": "Lista de Bibliotecas",
  "marc.bibliographic.datafield.110.subfield.a": "Nome da entidade ou do lugar",
  "marc.bibliographic.datafield.730": "Entrada secundária - Título uniforme",
  "marc.bibliographic.datafield.750.subfield.a":
    "Termo tópico adotado no tesauro",
  "marc.bibliographic.datafield.210.indicator.2.0": "Outro título abreviado",
  "acquisition.request.field.author_title":
    "Título e outras palavras associadas ao nome",
  "administration.form_customization.field": "Campo MARC",
  "acquisition.supplier.field.address": "Endereço",
  "administration.configuration.printer_type.printer_24_columns":
    "Impressora 24 colunas",
  "marc.bibliographic.datafield.246.subfield.a": "Título/título abreviado",
  "marc.bibliographic.datafield.246.subfield.b": "Complemento do título",
  "error.void": "",
  "administration.maintenance.backup.title": "Cópia de Segurança (Backup)",
  "administration.reports.title.reservation": "Relatório de Reservas",
  "marc.bibliographic.datafield.246.subfield.f":
    "Informação de volume/número de fascículo e/ou data da obra",
  "acquisition.supplier.field.url": "URL",
  "marc.bibliographic.datafield.246.subfield.g": "Miscelânea",
  "marc.bibliographic.datafield.246.subfield.h": "Meio físico",
  "administration.reports.option.classification": "Classificação (CDD)",
  "marc.bibliographic.datafield.110.subfield.n":
    "Número da parte - seção da obra - ordem do evento",
  "marc.bibliographic.datafield.246.subfield.i": "Exibir texto",
  "administration.reports.field.accession_number": "Tombo Patrimonial",
  "circulation.user_field.short_type": "Tipo",
  "marc.bibliographic.datafield.110.subfield.l": "Língua do texto",
  "menu.multi_schema": "Multi-bibliotecas",
  "cataloging.database.main": "Principal",
  "marc.bibliographic.datafield.246.subfield.n":
    "Número da parte/seção da obra",
  "administration.reports.select.option.dewey":
    "Estatística por Classificação Dewey",
  "marc.bibliographic.datafield.246.subfield.p": "Nome da parte/seção da obra",
  "marc.bibliographic.datafield.110.subfield.d": "Data da realização do evento",
  "marc.bibliographic.datafield.110.subfield.c":
    "Local de realização do evento",
  "marc.bibliographic.datafield.110.subfield.b": "Unidades subordinadas",
  "circulation.lending.expected_return_date": "Data prevista para devolução",
  "administration.translations.error.dump":
    "Não foi possível gerar o arquivo de traduções",
  "cataloging.tab.record.custom.field_label.biblio_020": "ISBN",
  "cataloging.import.button.import_this_page":
    "Importar registros desta página",
  "cataloging.tab.record.custom.field_label.biblio_022": "ISSN",
  "administration.maintenance.backup.button_exclude_digital_media":
    "Gerar backup sem arquivos digitais",
  "cataloging.error.invalid_database": "Base de dados inexistente",
  "cataloging.tab.record.custom.field_label.biblio_024": "ISRC",
  "multi_schema.select_restore.title":
    "Restauração de Backup de Múltiplas Bibliotecas",
  "administration.form_customization.subfield": "MARC",
  "administration.form_customization.field_repeatable": "Repetível",
  "administration.configuration.title.search.distributed_search_limit":
    "Limite de resultados para buscas distribuídas",
  "administration.accesscards.status.available": "Disponível",
  "cataloging.import.step_1_description":
    "Neste passo, você pode importar um arquivo contendo registros nos formatos MARC, XML e ISO2709 ou fazer uma pesquisa em outras bibliotecas. Selecione abaixo o modo de importação desejado, selecionando o arquivo ou preenchendo os termos da pesquisa. No passo seguinte, você poderá selecionar quais registros deverão ser importados.",
  "cataloging.tab.record.custom.field_label.biblio_490": "Série",
  "administration.user_type.field.reservation_time_limit": "Prazo de reserva",
  "cataloging.tab.record.custom.field_label.biblio_013":
    "Informação do controle de patentes",
  "administration.setup.biblivre3restore.confirm_description":
    "Você realmente deseja restaurar este Backup?",
  "administration.configuration.title.logged_out_text":
    "Texto inicial para usuários não logados",
  "administration.form_customization.indicator.label_text": "Texto",
  "cataloging.tab.record.custom.field_label.vocabulary_450": "Termo Use Para",
  "acquisition.request.error.no_request_found":
    "Não foi possível encontrar nenhuma Requisição",
  "cataloging.import.type.authorities": "Autoridades",
  "administration.z3950.confirm_delete_record.forever":
    "O Servidor Z39.50 será excluído permanentemente do sistema e não poderá ser recuperado",
  "administration.permissions.items.cataloging_bibliographic_delete":
    "Excluir registro bibliográfico",
  "administration.permissions.button.select_user": "Selecionar Usuário",
  "search.common.button.list_all": "Listar Todos",
  "circulation.reservation.button.reserve": "Reservar",
  "circulation.reservation.button.select_reader": "Selecionar leitor",
  "cataloging.authorities.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "common.no": "Não",
  "common.ok": "Ok",
  "administration.reports.select.option.user": "Relatório por Usuário",
  "administration.reports.field.order": "Ordenar por",
  "marc.authorities.datafield.411.subfield.a": "Nome do evento",
  "marc.bibliographic.datafield.041.subfield.h":
    "Código do idioma do documento original",
  "circulation.user.button.save_as_new": "Salvar como novo",
  "administration.permissions.items.administration_indexing":
    "Gerenciar indexação da base de dados",
  "cataloging.bibliographic.indexing_groups.isbn": "ISBN",
  "search.bibliographic.isrc": "ISRC",
  "marc.holding.datafield.541.indicator.1": "Privacidade",
  "marc.bibliographic.datafield.041.subfield.a": "Código do idioma do texto",
  "circulation.lending.button.print_lending_receipt":
    "Imprimir recibo de empréstimo",
  "marc.bibliographic.datafield.041.subfield.b":
    "Código do idioma do sumário ou resumo",
  "administration.migration.title": "Migração de dados do Biblivre 3",
  "menu.circulation_user": "Cadastro de Usuários",
  "multi_schema.restore.dont_restore": "Não restaurar esta biblioteca",
  "common.help": "Ajuda",
  "marc.authorities.datafield.670.subfield.a": "Nome retirado de",
  "marc.authorities.datafield.670.subfield.b": "Informações encontradas",
  "administration.form_customization.material_type": "Tipos de Material",
  "administration.reports.select.option.accession_number.full":
    "Relatório completo de Tombo Patrimonial",
  "administration.configuration.invalid_pg_dump_path":
    "Caminho inválido. O Biblivre não será capaz de gerar backups já que o arquivo <strong>pg_dump</strong> não foi encontrado.",
  "multi_schema.backup.schemas.description":
    "Selecione abaixo todas as bibliotecas que farão parte do backup. Mesmo que um backup possua diversas bibliotecas, você poderá escolher quais deseja restaurar quando precisar.",
  "circulation.custom.user_field.birthday": "Data de Nascimento",
  "search.holding.accession_number": "Tombo patrimonial",
  "administration.form_customization.error.invalid_tag":
    "Campo Marc inválido. O campo Marc deve ser numérico, e possuir 3 digitos.",
  "multi_schema.manage.page_help":
    "A tela de multi-bibliotecas permite cadastrar diversas bibliotecas para serem gerenciadas por um único Biblivre. A partir do momento que você habilitar o sistema de multi-bibliotecas, a lista de bibliotecas cadastradas será exibida sempre que alguém entrar no endereço padrão do Biblivre 5.",
  "marc.vocabulary.datafield.750.indicator.1.1": "Assunto primário",
  "marc.vocabulary.datafield.750.indicator.1.2": "Assunto secundário",
  "administration.permissions.items.circulation_delete":
    "Excluir registro de usuário",
  "marc.vocabulary.datafield.750.indicator.1.0": "Nenhum nível especificado",
  "administration.accesscards.change_status.question.block":
    "Deseja realmente bloquear este Cartão?",
  "administration.maintenance.reindex.button_bibliographic":
    "Reindexar base bibliográfica",
  "marc.holding.datafield.541.indicator.1._": "nenhuma informação fornecida",
  "marc.bibliographic.datafield.555.subfield.3": "Materiais especificados",
  "administration.setup.biblivre3restore": "Restaurar um Backup do Biblivre 3",
  "acquisition.request.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "administration.setup.biblivre3restore.confirm_title": "Restaurar Backup",
  "login.goodbye": "Até logo",
  "administration.accesscards.confirm_delete_record.forever":
    "O Cartão será excluído permanentemente do sistema e não poderá ser recuperado",
  "menu.help": "Ajuda",
  "administration.reports.select.group.acquisition": "Aquisição",
  "acquisition.quotation.selected_records_singular": "{0} Valor Adicionado",
  "multi_schema.manage.error.toggle": "Erro ao trocar estado da biblioteca.",
  "acquisition.quotation.error.delete": "Falha ao exluir a cotação",
  "menu.administration_datamigration": "Migração de Dados",
  "administration.accesscards.error.card_not_found": "Nenhum Cartão encontrado",
  "search.distributed.any": "Qualquer",
  "administration.permission.success.permissions_saved":
    "Permissões alteradas com sucesso",
  "administration.reports.option.author": "Autor",
  "circulation.lending.payment_date": "Data de Pagamento",
  "marc.vocabulary.datafield.550": "TG (termo genérico)",
  "administration.reports.select.option.accession_number":
    "Relatório de Tombo Patrimonial",
  "menu.administration_permissions": "Logins e Permissões",
  "menu.circulation": "Circulação",
  "cataloging.common.button.upload": "Enviar",
  "search.common.in_this_library": "Nesta biblioteca",
  "circulation.user_field.name": "Nome",
  "marc.holding.datafield.541.indicator.1.1": "não confidencial",
  "marc.holding.datafield.541.indicator.1.0": "confidencial",
  "administration.reports.select.option.field_count": "Contagem do campo",
  "circulation.error.user_not_found": "Usuário não encontrado",
  "marc.bibliographic.datafield.450": "UP (remissiva para TE não usado)",
  "administration.setup.biblivre4restore.skip": "Ignorar",
  "administration.reports.field.database_work": "Trabalho",
  "cataloging.authorities.indexing_groups.all": "Qualquer campo",
  "administration.setup.upload_popup.processing": "Processando...",
  "acquisition.order.page_help":
    "<p>A rotina de Pedidos permite o cadastramento e pesquisa de pedidos (compras) realizados com os fornecedores cadastrados. Para cadastrar um novo Pedido, deve-se selecionar um Fornecedor e uma Cotação previamente cadastrados, assim como entrar dados como Data de Vencimento e dados da Nota Fiscal.</p>\n<p>A pesquisa buscará cada um dos termos digitados nos campos <em>Número do Registro do Pedido, Nome Fantasia do Fornecedor, e Autor ou Título da Requisição</em>.</p>",
  "circulation.lending.estimated_fine": "Multa estimada para devolução hoje",
  "marc.material_type.pamphlet": "Panfleto",
  "marc.holding.datafield.852": "Informações sobre a localização",
  "administration.translations.edit.description":
    '<p>Abaixo você pode editar as traduções sem ter que baixar o arquivo. Esta tela é ideal para rápidas alterações em textos do Biblivre. O idioma exibido abaixo é o mesmo que está atualmente em uso. Para editar as traduções de outro idioma, troque o idioma atual do Biblivre por outro no topo da página. Caso você tenha personalizado seu Biblivre na tela de Personalizacao, você precisará ajustar os nomes dos campos criados para todos os idiomas instalados. Para facilitar nesse trabalho, clique na caixa "Exibir apenas os campos sem tradução".</p><p>Você pode também adicionar um novo idioma diretamente nesta tela. Para tanto, basta alterar o valor do campo "language_code".</p>',
  "administration.maintenance.backup.error.invalid_destination_schema":
    "O atalho de destino é inválido",
  "marc.bibliographic.datafield.022.subfield.a": "Número do ISSN",
  "marc.holding.datafield.856": "Localização de obras por meio eletrônico",
  "administration.reports.field.end_date": "Data Final",
  "administration.reports.title.summary": "Relatório de Sumário do Catálogo",
  "cataloging.authorities.indexing_groups.entity": "Entidade",
  "circulation.lending.button.renew": "Renovar",
  "administration.user_type.error.delete": "Falha ao exluir o Tipo de Usuário",
  "multi_schema.manage.button.show_log": "Exibir log",
  "acquisition.supplier.field.address_number": "Número",
  "marc.bibliographic.datafield.082.subfield.a":
    "Número de Classificação (CDD)",
  "marc.bibliographic.datafield.400": "Outra Forma do nome",
  "marc.bibliographic.datafield.555.subfield.a":
    "Nota de índice cumulativo e remissivo",
  "administration.permissions.items.circulation_user_reservation":
    "Efetuar Reserva para si mesmo",
  "marc.bibliographic.datafield.555.subfield.b": "Fonte disponível",
  "marc.bibliographic.datafield.555.subfield.c": "Grau de controle",
  "marc.bibliographic.datafield.555.subfield.d": "Referência bibliográfica",
  "administration.reports.option.location": "Localização",
  "administration.permissions.items.acquisition_order_list": "Listar pedidos",
  "marc.bibliographic.datafield.082.subfield.2": "Número de edição da CDD",
  "marc.bibliographic.datafield.555.subfield.u":
    "Identificador uniforme de recursos",
  "marc.bibliographic.datafield.240.indicator.1.0":
    "Não gera entrada para o título",
  "marc.bibliographic.datafield.240.indicator.1.1":
    "Gera entrada para o título",
  "marc.bibliographic.datafield.595.subfield.b":
    "Notas de Bibliografia, índices e/ou apêndices",
  "marc.bibliographic.datafield.595.subfield.a": "Código da bibliografia",
  "administration.permissions.items.administration_permissions":
    "Gerenciar permissões",
  "administration.reports.field.database_count":
    "Total de Registros nas Bases no Período",
  "marc.bibliographic.datafield.411": "Outra Forma do nome",
  "administration.reports.field.lendings_count":
    "Total de Livros emprestados no período",
  "cataloging.import.button.import_this_record": "Importar este registro",
  "search.bibliographic.labels.never_printed":
    "Listar apenas exemplares que nunca tiveram etiquetas impressas",
  "circulation.lendings.holding_list_lendings":
    "Listar apenas exemplares emprestados",
  "cataloging.import.search_button": "Pesquisar",
  "search.distributed.query_placeholder": "Preencha os termos da pesquisa",
  "administration.permissions.items.cataloging_vocabulary_save":
    "Salvar registro de vocabulário",
  "administration.permissions.reader": "Leitor",
  "administration.permissions.items.cataloging_vocabulary_delete":
    "Excluir registro de vocabulário",
  "administration.form_customization.subfield_name": "Nome do Subcampo",
  "administration.configuration.title.search.result_limit":
    "Limite de resultados",
  "administration.reports.field.expected_date": "Data prevista",
  "marc.bibliographic.datafield.410": "Outra Forma do nome",
  "marc.bibliographic.datafield.029": "ISNM",
  "format.datetime_user_friendly": "DD/MM/AAAA hh:mm",
  "cataloging.tab.form.remove": "Remover",
  "administration.brief_customization.confirm_disable_datafield_confirm":
    "Tem certeza que deseja remover este campo do Resumo Catalográfico?",
  "administration.migration.groups.cataloging_vocabulary":
    "Catálogo de Vocabulário",
  "acquisition.order.field.delivered_quantity": "Quantidade recebida",
  "administration.permissions.password": "Senha",
  "multi_schema.manage.schemas.title": "Lista de Bibliotecas deste Servidor",
  "administration.configuration.title.general.pg_dump_path":
    "Caminho para o programa pg_dump",
  "label.password": "Senha",
  "circulation.user.button.delete": "Excluir",
  "marc.bibliographic.datafield.020": "ISBN",
  "circulation.access_control.card_not_found": "Cartão não encontrado",
  "administration.setup.progress_popup.title": "Manutenção do Biblivre 5",
  "marc.bibliographic.datafield.022": "ISSN",
  "marc.bibliographic.datafield.024": "Outros números ou códigos normalizados",
  "cataloging.tab.record.custom.field_label.authorities_670":
    "Nome retirado de",
  "cataloging.bibliographic.automatic_holding_help":
    "<p>Utilize os campos abaixo para acelerar o processo de catalogação de exemplares. O preenchimento é opcional e nenhum exemplar será criado caso nenhum campo seja preenchido. Neste caso, você poderá criar exemplares manualmente, com o formulário completo, pela aba <em>Exemplares</em>.</p><p>Caso seja do seu interesse cadastrar exemplares agora, o único campo que precisa sempre ser preenchido é o Número de Exemplares. Para cada volume da obra serão criados esta quantidade selecionada de exemplares, portanto, se o registro bibliográfico possuir 3 volumes e você preencher o Número de Exemplares com o número 2 e o Número de Volumes da Obra com o número 3, serão criados 6 exemplares, 2 para o Volume 1, 2 para o Volume 2 e 2 para o Volume 3. Caso os exemplares sejam de apenas um volume, preencha o campo Número do Volume, e, caso a obra não tenha volumes, deixe ambos os campo em branco.</p>",
  "administration.reports.field.user_status": "Situação",
  "administration.reports.title.lendings_by_date":
    "Relatório de Empréstimos por Período",
  "marc.authorities.datafield.110.indicator.1.2": "nome na ordem direta",
  "marc.authorities.datafield.110.indicator.1.0": "nome invertido",
  "multi_schema.restore.title": "Opções de Restauração de Backup",
  "marc.authorities.datafield.110.indicator.1.1": "nome da jurisdição",
  "administration.reports.field.user_lendings": "Empréstimos Ativos",
  "cataloging.error.invalid_search_parameters":
    "Os parâmetros desta pesquisa não estão corretos",
  "administration.permission.error.delete": "Falha ao excluir o login",
  "menu.search_z3950": "Distribuída",
  "acquisition.supplier.field.name": "Razão Social",
  "administration.maintenance.backup.error.couldnt_restore_backup":
    "Não foi possível restaurar o backup selecionado",
  "administration.form_customization.subfield_repeatable": "Repetível",
  "common.unblock": "Desbloquear",
  "acquisition.supplier.confirm_cancel_editing_title":
    "Cancelar edição de registro de fornecedor",
  "circulation.lending.button.lend": "Emprestar",
  "cataloging.bibliographic.indexing_groups.subject": "Assunto",
  "marc.bibliographic.datafield.502.subfield.a": "Notas de dissertação ou tese",
  "acquisition.request.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de requisição?",
  "administration.maintenance.reinstall.button":
    "Ir para a tela de restauração e reconfiguração",
  "aquisition.request.error.request_not_found":
    "Não foi possível encontrar a requisição",
  "acquisition.request.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "administration.brief_customization.biblio": "Registro Bibliográfico",
  "marc.vocabulary.datafield.150": "TE",
  "administration.reports.field.user_name": "Nome",
  "circulation.access_control.card_unavailable": "Cartão indisponível",
  "marc.bibliographic.datafield.040": "Fonte de catalogação",
  "marc.bibliographic.datafield.041": "Código da língua",
  "search.bibliographic.remove_item_button": "Excluir",
  "marc.bibliographic.datafield.043": "Código de área geográfica",
  "administration.maintenance.reindex.warning":
    "Este processo pode demorar alguns minutos, dependendo da configuração de hardware do seu servidor. Durante este tempo, o Biblivre não estará disponível para a pesquisa de registros, mas voltará assim que a indexação terminar.",
  "marc.bibliographic.datafield.045": "Código do período cronológico",
  "administration.change_password.title": "Troca de Senha",
  "cataloging.bibliographic.attachment.alias":
    "Digite um nome para este arquivo digital",
  "marc.bibliographic.datafield.711.subfield.k": "Subcabeçalhos",
  "administration.permissions.groups.digitalmedia": "Mídia Digital",
  "circulation.user_cards.popup.description":
    "Selecione em qual etiqueta deseja iniciar a impressão",
  "circulation.user.inactive_users_only": "Listar apenas usuários inativos",
  "marc.bibliographic.datafield.711.subfield.n": "Número de ordem do evento",
  "marc.material_type.photo": "Foto",
  "marc.bibliographic.datafield.711.subfield.t":
    "Título da obra junto a entrada",
  "administration.permissions.button.remove_login": "Remover Login",
  "cataloging.tabs.holdings": "Exemplares",
  "circulation.access_control.arrival_time": "Data de entrada",
  "administration.permissions.items.administration_customization":
    "Personalização",
  "administration.accesscards.field.status": "Situação",
  "administration.reports.field.user_status.blocked": "Bloqueado",
  "marc.bibliographic.datafield.711.subfield.d": "Data da realização do evento",
  "common.created": "Cadastrado em",
  "marc.bibliographic.datafield.711.subfield.c":
    "Local de realização do evento",
  "cataloging.import.save.failed": "Falha ao importar os Registros",
  "marc.bibliographic.datafield.711.subfield.a": "Nome do evento",
  "marc.bibliographic.datafield.711.subfield.g": "Informações adicionais",
  "acquisition.quotation.title.title": "Título",
  "administration.setup.biblivre3import.button": "Importar dados do Biblivre 3",
  "marc.bibliographic.datafield.711.subfield.e":
    "Nome de subunidades do evento",
  "administration.accesscards.success.update": "Cartão salvo com sucesso",
  "multi_schema.restore.restore_complete_backup.title":
    "Restaurar todas as informações do Backup, substituindo todas as bibliotecas deste Biblivre",
  "administration.configurations.error.file_not_found":
    "Arquivo não encontrado.",
  "marc.bibliographic.datafield.711.indicator.1.0": "nome invertido",
  "marc.bibliographic.datafield.711.indicator.1.2": "nome na ordem direta",
  "marc.material_type.music": "Música",
  "marc.bibliographic.datafield.711.indicator.1.1": "nome da jurisdição",
  "administration.permissions.login": "Login",
  "search.common.sort_by": "Ordenar por",
  "cataloging.lending.error.blocked_user":
    "O leitor selecionado está bloqueado",
  "administration.setup.biblivre4restore.select_digital_media.description":
    "O arquivo de backup selecionado anteriormente não possui Mídias Digitais.  Caso você possua um backup somente de Mídias Digitais, selecione abaixo o arquivo desejado, ou faça o upload do mesmo. Caso não deseje importar Mídias Digitais, clique no botão <strong>Ignorar</strong>.",
  "circulation.lending.return_success": "Exemplar devolvido com sucesso",
  "marc.bibliographic.datafield.611.subfield.z": "Subdivisão geográfico",
  "marc.bibliographic.datafield.024.indicator.1":
    "Tipo do número ou código normalizado",
  "marc.bibliographic.datafield.611.subfield.x": "Subdivisão geral",
  "administration.reports.field.date_from": "De",
  "marc.bibliographic.datafield.611.subfield.y": "Subdivisão cronológico",
  "multi_schema.manage.new_schema.button.create": "Criar Biblioteca",
  "administration.accesscards.error.unblock": "Falha ao desbloquear o Cartão",
  "administration.permissions.items.cataloging_bibliographic_move":
    "Mover registro bibliográfico",
  "marc.material_type.periodic": "Periódico",
  "administration.form_customization.subfield_autocomplete.previous_values":
    "Valores anteriores",
  "administration.maintenance.reinstall.confirm.description":
    "Deseja ir para a tela de restauração e reconfiguração? Você poderá restaurar um backup do Biblivre 5, apagar os dados da sua biblioteca ou refazer uma migração.",
  "administration.maintenance.reinstall.confirm.question":
    "Atenção: Todas as opções farão com que os dados de sua biblioteca sejam apagados em favor dos dados recuperados. Recomenda-se fazer um backup antes de iniciar esta ação. Deseja continuar?",
  "administration.permission.error.create_login":
    "Erro ao criar login de usuário",
  "cataloging.labels.button.print_labels": "Imprimir etiquetas",
  "administration.setup.cancel.description":
    "Clique no botão abaixo para desistir de restaurar esta instalação do Biblivre 5 e retornar à sua biblioteca.",
  "acquisition.supplier.field.country": "País",
  "circulation.reservation.record_reserved_to_the_following_readers":
    "Este registro está reservado para os seguintes leitores",
  "menu.administration_translations": "Traduções",
  "cataloging.bibliographic.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "cataloging.bibliographic.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro bibliográfico?",
  "cataloging.common.digital_files": "Arquivos Digitais",
  "administration.maintenance.reindex.button_vocabulary":
    "Reindexar base de vocabulário",
  "administration.maintenance.reindex.description.4":
    "Problemas na pesquisa, onde registros cadastrados não são encontrados.",
  "administration.permissions.items.circulation_access_control_list":
    "Listar controle de acesso",
  "cataloging.holding.confirm_cancel_editing_title":
    "Cancelar edição de registro de exemplar",
  "marc.bibliographic.datafield.362.indicator.1": "Formato da data",
  "marc.authorities.datafield.110.indicator.1": "Forma de entrada",
  "administration.maintenance.reindex.description.1":
    "A reindexação da base de dados é o processo no qual o Biblivre analisa cada registro cadastrado, criando índices em certos campos para que a pesquisa neles seja possível. É um processo demorado e que deve ser executado apenas nos casos específicos abaixo:<br/>",
  "administration.maintenance.reindex.description.2":
    "Alteração na configuração de campos buscáveis;",
  "administration.maintenance.reindex.description.3":
    "Importação de registros de versões antigas do Biblivre; e",
  "circulation.custom.user_field.phone_work_extension":
    "Ramal do Telefone Comercial",
  "acquisition.order.selected_records_plural": "{0} Valores Adicionados",
  "administration.change_password.submit_button": "Trocar Senha",
  "administration.permissions.items.circulation_lending_return":
    "Realizar devoluções de obras",
  "cataloging.authorities.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de autoridade?",
  "marc.bibliographic.datafield.710.indicator.2.2": "entrada analítica",
  "administration.brief_customization.separators.comma-space":
    "Vírgula - espaço",
  "administration.maintenance.reindex.button_authorities":
    "Reindexar base de autoridades",
  "administration.permission.success.password_saved":
    "Senha alterada com sucesso",
  "marc.bibliographic.datafield.611.subfield.n": "Número de ordem do evento",
  "search.common.advanced_search": "Pesquisa Avançada",
  "marc.bibliographic.datafield.245.indicator.2":
    "Número de caracteres a serem desprezados na alfabetação",
  "marc.bibliographic.datafield.611.subfield.t":
    "Título da obra junto à entrada",
  "administration.configuration.title.general.backup_path":
    "Caminho de destino das cópias de segurança (Backups)",
  "marc.bibliographic.datafield.245.indicator.1":
    "Gera entrada secundária na ficha",
  "common.save_as_new": "Salvar como Novo",
  "marc.bibliographic.datafield.490": "Indicação de série",
  "acquisition.supplier.field.email": "Email",
  "marc.bibliographic.datafield.611.subfield.d": "Data da realização do evento",
  "marc.bibliographic.datafield.611.subfield.e":
    "Nome das subunidades do evento",
  "administration.reports.select.option.default": "Selecione...",
  "marc.bibliographic.datafield.611.subfield.c":
    "Local de realização do evento",
  "marc.bibliographic.datafield.013": "Informação do controle de patentes",
  "marc.bibliographic.datafield.611.subfield.a": "Nome do evento",
  "cataloging.tabs.brief": "Resumo Catalográfico",
  "cataloging.tab.record.custom.field_label.biblio_501": "Notas",
  "marc.bibliographic.datafield.710.indicator.2._":
    "nenhuma informação fornecida",
  "administration.reports.select.group.custom": "Relatório Personalizado",
  "cataloging.tab.record.custom.field_label.biblio_500": "Notas",
  "cataloging.tab.record.custom.field_label.biblio_502": "Nota de tese",
  "cataloging.tab.record.custom.field_label.biblio_505": "Notas de conteúdo",
  "cataloging.bibliographic.automatic_holding.holding_library":
    "Biblioteca Depositária",
  "cataloging.tab.record.custom.field_label.biblio_504":
    "Notas de bibliografia",
  "administration.reports.select.option.late_lendings":
    "Relatório de Empréstimos em Atraso",
  "acquisition.order.field.created": "Data do Pedido",
  "cataloging.tab.record.custom.field_label.biblio_506":
    "Notas de acesso restrito",
  "administration.form_customization.subfield_autocomplete.label":
    "Auto Completar",
  "circulation.user.page_help":
    '<p>O <strong>"Cadastro de Usuários"</strong> permitirá guardar informações sobre os leitores e funcionários da biblioteca para que seja possível realizar empréstimos, reservas e controlar o acesso destes usuários à biblioteca.</p>\n<p>Antes de cadastrar um usuário é recomendado verificar se ele já está cadastrado, através da <strong>pesquisa simplificada</strong>, que buscará cada um dos termos digitados no campo selecionado ou através da <strong>pesquisa avançada</strong>, que confere um maior controle sobre os usuários localizados, permitindo, por exemplo, buscar usuários com multas pendentes.</p>',
  "cataloging.labels.selected_records_singular": "{0} exemplar selecionado",
  "administration.reports.field.date_to": "a",
  "cataloging.upload_popup.uploading": "Enviando arquivo...",
  "administration.form_customization.error.existing_subfield":
    "Já existe um Subcampo com esta tag.",
  "administration.permissions.items.acquisition_request_list":
    "Listar requisições",
  "administration.permissions.items.acquisition_supplier_save":
    "Salvar registro de fornecedor",
  "circulation.user.tabs.fines": "Multas",
  "circulation.lending.receipt.lending_date": "Data de Empréstimo",
  "cataloging.bibliographic.confirm_move_record_description_singular":
    "Você realmente deseja mover este registro?",
  "cataloging.vocabulary.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "acquisition.quotation.selected_records_plural": "{0} Valores Adicionados",
  "administration.reports.title.user": "Relatório por Usuário",
  "circulation.lending.buttons.pay_fine": "Pagar",
  "administration.z3950.confirm_cancel_editing_title":
    "Cancelar edição do Servidor Z39.50",
  "cataloging.holding.confirm_delete_record_title":
    "Excluir registro de exemplar",
  "circulation.access_control.user_has_card": "Usuário já possui um cartão",
  "circulation.user.tabs.reservations": "Reservas",
  "administration.reports.fieldset.cataloging": "Pesquisa Bibliográfica",
  "administration.setup.upload_popup.title": "Abrindo Arquivo",
  "menu.search_authorities": "Autoridades",
  "acquisition.quotation.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "acquisition.quotation.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de cotação?",
  "cataloging.authorities.author_type.select_author_type":
    "Selecione o tipo de autor",
  "administration.migration.groups.users":
    "Usuários, Logins de acesso e Tipos de Usuários",
  "cataloging.import.source_search_subtitle":
    "Selecione uma biblioteca remota e preencha os termos da pesquisa. A pesquisa retornará um limite de {0} registros. Caso não encontre o registro de interesse, refine sua pesquisa.",
  "circulation.accesscards.lend.error": "Falha ao vincular o Cartão",
  "acquisition.request.success.delete": "Requisição excluída com sucesso",
  "multi_schema.restore.restore_with_new_schema_name":
    "Restaurar esta biblioteca usando um novo endereço",
  "administration.translations.error.invalid_language":
    "Idioma em branco ou desconhecido",
  "marc.bibliographic.datafield.700.indicator.2._":
    "nenhuma informação fornecida",
  "marc.authorities.datafield.670": "Origem das informações",
  "administration.reports.title.bibliography":
    "Relatório de Bibliografia por Autor",
  "acquisition.order.title.quantity": "Quantidade",
  "administration.maintenance.reinstall.title": "Restauração e Reconfiguração",
  "administration.setup.biblivre3import.description":
    'Foi detectada uma instalação do Biblivre 3 neste computador. Você poderá importar estes dados para o Biblivre 5 selecionando os itens de interesse e clicando no botão abaixo. Após a importação, <strong>você deverá reindexar as três bases: Bibliográfica, Autoridades e Vocabulário</strong>, através da tela <strong>"Manutenção"</strong> em <strong>"Administração"</strong> e <strong>selecionar novamente as permissões dos funcionários com acesso ao Biblivre</strong>, através da tela <strong>"Logins e Permissões"</strong> em <strong>"Administração"</strong>.',
  "circulation.lending.receipt.title": "Título",
  "cataloging.import.source_file_title":
    "Importar registros a partir de um arquivo",
  "common.calculating": "Calculando",
  "administration.translations.error.no_language_code_specified":
    "O arquivo de traduções enviado não possui o identificador de idioma: <strong>*language_code</strong>",
  "circulation.custom.user_field.email": "Email",
  "circulation.user_cards.page_help":
    '<p>O módulo <strong>"Impressão de Carteirinhas"</strong> permite gerar as etiquetas de identificação dos leitores da biblioteca.</p>\n<p>É possível gerar as carteirinhas de um ou mais leitores em uma única impressão, utilizando a pesquisa abaixo.</p>\n<p>Após encontrar o(s) leitor(es), use o botão <strong>"Selecionar usuário"</strong> para adicioná-los à lista de impressão de carteirinhas. Você poderá fazer diversas pesquisas, sem perder a seleção feita anteriormente. Quando estiver satisfeito com a seleção, clique no botão <strong>"Imprimir carteirinhas"</strong>. Será possível selecionar a posição da primeira carteirinha na folha de etiquetas.</p>',
  "common.clear": "Limpar",
  "search.bibliographic.holdings_lent": "Emprestados",
  "administration.user_type.field.fine_value": "Valor da Multa por atrasos",
  "administration.accesscards.success.save": "Cartão incluído com sucesso",
  "circulation.user_cards.button.select_item": "Selecionar usuário",
  "marc.bibliographic.datafield.501.subfield.a":
    'Notas iniciadas com a palavra "com"',
  "administration.translations.upload_popup.processing": "Processando...",
  "administration.migration.description":
    "Selecione abaixo quais items deseja importar da base de dados do Biblivre 3",
  "administration.permissions.page_help":
    "<p>A rotina de Permissões permite a criação de Login e Senha para um usuário, assim como a definição de suas permissões de acesso ou utilização das diversas rotinas do Biblivre.</p>\n<p>A pesquisa buscará os usuários já cadastrados no Biblivre, e funciona da mesma forma que a pesquisa simplificada da rotina de Cadastro de Usuários.</p>",
  "cataloging.bibliographic.material_type": "Tipo de material",
  "multi_schema.manage.new_schema.field.title": "Nome da biblioteca",
  "administration.maintenance.backup.show_all": "Mostrar todos os {0} backups",
  "circulation.error.no_users_found": "Nenhum usuário encontrado",
  "administration.configuration.title.general.multi_schema":
    "Habilitar Multi-bibliotecas",
  "administration.permissions.items.administration_z3950_delete":
    "Excluir registro de servidor z3950",
  "cataloging.bibliographic.automatic_holding.holding_acquisition_type":
    "Tipo de Aquisição",
  "cataloging.import.step_2_description":
    "Neste passo, confira os registros que serão importados e importe-os individualmente ou em conjunto, através dos botões disponíveis no final da página. O Biblivre detecta automaticamente se o regristo é bibliográfico, autoridades ou vocabulário, porém permite que o usuário corrija antes da importação. <strong>Importante:</strong> Os registros importados serão adicionados à Base de Trabalho e deverão ser corrigidos e ajustados antes de serem movidos para a Base Principal. Isso evita que registros incorretos sejam adicionados diretamente à base de dados final.",
  "cataloging.tab.record.custom.field_label.biblio_530": "Notas",
  "search.distributed.isbn": "ISBN",
  "circulation.lending.holdings.title": "Pesquisar Exemplar",
  "administration.maintenance.backup.label_digital_media_only":
    "Backup de arquivos digitais",
  "administration.setup.biblivre4restore.field.upload_file":
    "Selecionar arquivo de backup",
  "cataloging.tab.record.custom.field_label.biblio_534": "Notas de fac-símile",
  "cataloging.import.source_file_subtitle":
    "Selecione um arquivo contendo os registros a serem importados. O formato deste arquivo pode ser <strong>texto</strong>, <strong>XML</strong> ou <strong>ISO2709</strong>, desde que a catalogação original seja compatível com MARC.",
  "marc.vocabulary.datafield.685.subfield.i": "Texto explicativo",
  "cataloging.import.record_imported_successfully":
    "Registro importado com sucesso",
  "administration.reports.field.late_lendings_count":
    "Total de Empréstimos em Atraso",
  "circulation.reservation.reservation_count": "Registros reservados",
  "multi_schema.manage.log_header":
    "[Log de criação de nova biblioteca do Biblivre 5]",
  "administration.maintenance.backup.button_digital_media_only":
    "Gerar backup de arquivos digitais",
  "marc.bibliographic.datafield.243.indicator.2.4": "4 caracteres a desprezar",
  "circulation.lending.fine.failure_pay_fine": "Falha ao pagar multa",
  "marc.bibliographic.datafield.243.indicator.2.5": "5 caracteres a desprezar",
  "marc.bibliographic.datafield.243.indicator.2.6": "6 caracteres a desprezar",
  "marc.bibliographic.datafield.243.indicator.2.7": "7 caracteres a desprezar",
  "administration.permissions.items.administration_translations":
    "Gerenciar traduções",
  "marc.bibliographic.datafield.243.indicator.2.8": "8 caracteres a desprezar",
  "acquisition.quotation.confirm_delete_record_title":
    "Excluir registro de cotação",
  "marc.bibliographic.datafield.243.indicator.2.9": "9 caracteres a desprezar",
  "menu.acquisition_quotation": "Cotações",
  "marc.vocabulary.datafield.913": "Código local",
  "cataloging.tab.record.custom.field_label.biblio_521":
    "Notas de público alvo",
  "administration.reports.field.user_id": "Matrícula",
  "cataloging.tab.record.custom.field_label.biblio_520": "Notas de resumo",
  "circulation.lending.buttons.dismiss_fine": "Abonar",
  "marc.bibliographic.datafield.243.indicator.2.0":
    "Nenhum caractere a desprezar",
  "marc.bibliographic.datafield.243.indicator.2.1": "1 caractere a desprezar",
  "marc.bibliographic.datafield.243.indicator.2.2": "2 caracteres a desprezar",
  "marc.bibliographic.datafield.243.indicator.2.3": "3 caracteres a desprezar",
  "administration.brief_customization.vocabulary": "Registro de Vocabulário",
  "administration.reports.field.edition": "Edição",
  "administration.reports.field.unclassified": "<Não classificado>",
  "marc.bibliographic.datafield.555.indicator.1.8":
    "Não gerar constante na exibição",
  "administration.translations.upload.field.user_created":
    "Carregar traduções criadas pelo usuário",
  "login.access_denied": "Acesso negado. Usuário ou senha inválidos",
  "search.bibliographic.material_type": "Tipo de material",
  "cataloging.holding.error.shouldnt_delete_because_holding_is_or_was_lent":
    'Este exemplar está ou já foi emprestado e não deve ser excluído. Caso ele não esteja mais disponível, o procedimento correto é mudar sua disponibilidade para Indisponível. Se desejar mesmo assim excluir este exemplar, pressione o botão <b>"Forçar Exclusão"</b>.',
  "administration.configuration.description.circulation.lending_receipt.printer.type":
    "Esta configuração representa o tipo de impressora que será utilizada para a impressão de recibos de empréstimos.  Os valores possíveis são: impressora de 40 colunas, de 80 colunas, ou impressora comum (jato de tinta).",
  "marc.bibliographic.datafield.555.indicator.1.0": "Índice remissivo",
  "marc.bibliographic.datafield.040.subfield.a":
    "Código da agência catalogadora",
  "marc.bibliographic.datafield.040.subfield.d":
    "Agência que alterou o registro",
  "circulation.accesscards.return.error": "Falha ao devolver o Cartão",
  "marc.bibliographic.datafield.040.subfield.e":
    "Fontes convencionais de descrições de dados",
  "marc.bibliographic.datafield.040.subfield.b": "Língua da catalogação",
  "marc.bibliographic.datafield.040.subfield.c":
    "Agência que transcreveu o registro em formato legível por máquina",
  "marc.bibliographic.datafield.130.indicator.1.8": "8 caracteres a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.9": "9 caracteres a desprezar",
  "administration.permissions.groups.circulation": "Circulação",
  "marc.bibliographic.datafield.130.indicator.1.2": "2 caracteres a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.3": "3 caracteres a desprezar",
  "cataloging.labels.button.select_item": "Selecionar exemplar",
  "marc.bibliographic.datafield.130.indicator.1.0":
    "Nenhum caractere a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.1": "1 caractere a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.6": "6 caracteres a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.7": "7 caracteres a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.4": "4 caracteres a desprezar",
  "marc.bibliographic.datafield.130.indicator.1.5": "5 caracteres a desprezar",
  "administration.translations.upload.field.upload_file": "Arquivo",
  "menu.cataloging_vocabulary": "Vocabulário",
  "administration.reports.field.digits": "Dígitos significativos",
  "cataloging.tab.record.custom.field_label.biblio_100": "Autor",
  "multi_schema.manage.schemas.description":
    "Abaixo estão todas as bibliotecas cadastradas neste Biblivre 5. Caso queira alterar um nome ou subtítulo, acesse a tela de configurações da biblioteca.",
  "administration.accesscards.start_number": "Número inicial",
  "administration.configuration.printer_type.printer_80_columns":
    "Impressora 80 colunas",
  "marc.bibliographic.datafield.150.subfield.y":
    "Subdivisão cronológica adotada",
  "marc.bibliographic.datafield.150.subfield.x": "Subdivisão geral adotada",
  "circulation.user_field.status": "Situação",
  "search.common.created_between": "Catalogado entre",
  "cataloging.tab.record.custom.field_label.vocabulary_360": "Termo Associado",
  "marc.bibliographic.datafield.150.subfield.z":
    "Subdivisão geográfica adotada",
  "cataloging.record.success.save": "Registro incluído com sucesso",
  "administration.form_customization.subfield_autocomplete.fixed_table":
    "Tabela fixa",
  "cataloging.bibliographic.automatic_holding.holding_acquisition_date":
    "Data de aquisição",
  "administration.change_password.current_password": "Senha atual",
  "marc.bibliographic.datafield.830":
    "Entrada secundária - Série - Título Uniforme",
  "error.form_invalid_values":
    "Foram encontrados erros no preenchimento do formulário abaixo",
  "circulation.lending.user_total_lending_list":
    "Histórico de empréstimos a este leitor",
  "multi_schema.select_restore.description":
    "Use esta opção caso você queira restaurar um backup existente do Biblivre 4. Caso o Biblivre encontre backups salvos em seus documentos, você poderá restaurá-los diretamente da lista abaixo. Caso contrário, você deverá enviar um arquivo de backup (extensão <strong>.b4bz</strong>) através do formulário.",
  "search.common.users": "Usuários",
  "administration.user_type.simple_term_title": "Preencha o Tipo de Usuário",
  "administration.permissions.items.acquisition_order_save":
    "Salvar registro de pedido",
  "common.uncancel": "Recuperar",
  "administration.maintenance.backup.auto_download":
    "Backup realizado, baixando automaticamente em alguns segundos...",
  "administration.reports.field.title": "Título",
  "marc.bibliographic.datafield.555.indicator.1._": "Índice",
  "administration.reports.field.acquisition": "Data de aquisição",
  "administration.reports.field.dewey": "CDD",
  "administration.permissions.items.acquisition_request_save":
    "Salvar registro de requisição",
  "administration.permissions.items.acquisition_supplier_list":
    "Listar fornecedores",
  "cataloging.database.trash": "Lixeira",
  "administration.configurations.page_help":
    "<p>A rotina de Configurações permite a configuração de diversos parâmetros utilizados pelo Biblivre, como por exemplo o Título da Biblioteca, o Idioma Padrão ou a Moeda a ser utilizada. Cada configuração possui um texto explicativo para facilitar a sua utilização.</p>",
  "multi_schema.manage.error.description": "Falha ao criar nova biblioteca",
  "administration.accesscards.field.code": "Cartão",
  "circulation.user.users_with_pending_fines":
    "Listar apenas usuários com multas pendentes",
  "menu.help_about_biblivre": "Sobre o Biblivre",
  "administration.reports.fieldset.dewey": "Classificação Dewey",
  "administration.maintenance.backup.error.backup_file_not_found":
    "Arquivo de backup não encontrado",
  "circulation.custom.user_field.address_city": "Cidade",
  "search.common.simple_search": "Pesquisa Simplificada",
  "search.holding.shelf_location": "Localização",
  "marc.bibliographic.datafield.150.subfield.i": "Qualificador",
  "circulation.reservation.delete_failure": "Falha ao excluir a reserva",
  "marc.bibliographic.datafield.856":
    "Localização de obras por meio eletrônico",
  "marc.bibliographic.datafield.700.indicator.2": "Tipo de entrada secundária",
  "marc.bibliographic.datafield.740.subfield.a":
    "Título adicional - Título analítico",
  "marc.bibliographic.datafield.150.subfield.a": "Termo tópico adotado",
  "marc.bibliographic.datafield.611.indicator.1.3": "nome de família",
  "marc.bibliographic.datafield.700.indicator.1": "Forma de entrada",
  "marc.bibliographic.datafield.710.subfield.b": "Unidades subordinadas",
  "marc.bibliographic.datafield.611.indicator.1.2":
    "sobrenome composto (obsoleto)",
  "marc.bibliographic.datafield.710.subfield.c":
    "Local de realização do evento",
  "marc.bibliographic.datafield.611.indicator.1.1":
    "sobrenome simples ou composto",
  "administration.accesscards.status.in_use_and_blocked": "Em uso e bloqueado",
  "cataloging.tab.record.custom.field_label.biblio_555": "Notas",
  "marc.bibliographic.datafield.611.indicator.1.0":
    "prenome simples ou composto",
  "marc.bibliographic.datafield.710.subfield.a": "Nome da entidade ou do lugar",
  "administration.setup.biblivre3import.error": "Erro ao importar dados",
  "marc.bibliographic.datafield.710.subfield.g": "Informações adicionais",
  "marc.bibliographic.datafield.710.subfield.d": "Data de realização do evento",
  "menu.cataloging_authorities": "Autoridades",
  "circulation.user.confirm_delete_record.inactive":
    'Ele sairá da lista de pesquisas e só poderá ser encontrado através da "pesquisa avançada", de onde poderá ser excluído permanentemente ou recuperado',
  "marc.bibliographic.datafield.740.subfield.p":
    "Nome da parte - Seção da obra",
  "cataloging.import.type.vocabulary": "Vocabulário",
  "marc.bibliographic.datafield.740.subfield.n":
    "Número da parte - Seção da obra",
  "format.date": "dd/MM/yyyy",
  "marc.bibliographic.datafield.710.subfield.n":
    "Número da parte - Seção da obra",
  "marc.bibliographic.datafield.710.subfield.l": "Língua do texto",
  "search.bibliographic.holdings_reserved": "Reservas",
  "administration.reports.field.number_of_holdings": "Número de Exemplares",
  "administration.reports.field.requester": "Requerente",
  "marc.bibliographic.datafield.710.subfield.t":
    "Título da obra junto a entrada",
  "marc.bibliographic.datafield.045.subfield.c":
    "Período de tempo formatado anterior a 9999 a.C.",
  "administration.accesscards.end_number": "Número final",
  "circulation.error.you_cannot_delete_yourself":
    "Você não pode excluir-se ou marcar-se como inativo",
  "marc.bibliographic.datafield.711.indicator.1": "Forma de entrada",
  "acquisition.request.field.publisher": "Editora",
  "marc.bibliographic.datafield.045.subfield.a": "Código do período de tempo",
  "marc.bibliographic.datafield.045.subfield.b":
    "Período de tempo formatado de 9999 a.C em diante",
  "cataloging.tab.record.custom.field_label.biblio_130": "Obra Anônima",
  "multi_schema.manage.success.create": "Nova biblioteca criada com sucesso.",
  "administration.permissions.login_data": "Dados para acesso ao sistema",
  "administration.reports.label.author_count": "Quantidade de registros",
  "circulation.user.button.new": "Novo usuário",
  "acquisition.request.success.update": "Requisição salva com sucesso",
  "administration.reports.field.paid_value": "Valor Total Pago",
  "administration.z3950.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste Servidor Z39.50?",
  "administration.z3950.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "marc.bibliographic.datafield.600.subfield.y": "Subdivisão cronológico",
  "marc.bibliographic.datafield.600.subfield.x": "Subdivisão geral",
  "search.common.modified_between": "Alterado entre",
  "marc.bibliographic.datafield.600.subfield.z": "Subdivisão geográfico",
  "marc.bibliographic.datafield.525.subfield.a": "Nota de Suplemento",
  "administration.brief_customization.authorities": "Registro de Autoridades",
  "administration.permissions.items.cataloging_print_labels":
    "Imprimir etiquetas",
  "cataloging.import.type.do_not_import": "Não importar",
  "administration.migration.groups.access_control":
    "Cartões de acesso e Controle de acesso",
  "search.common.button.search": "Pesquisar",
  "cataloging.bibliographic.button.select_item": "Selecionar",
  "acquisition.supplier.fieldset.contact": "Contatos/Telefones",
  "administration.reports.field.biblio": "Bibliográficos",
  "acquisition.quotation.field.requisition_select": "Selecione uma Requisição",
  "cataloging.labels.page_help":
    '<p>O módulo <strong>"Impressão de Etiquetas"</strong> permite gerar as etiquetas de identificação interna e de lombada para os exemplares da biblioteca.</p>\n<p>É possível gerar as etiquetas de um ou mais exemplares em uma única impressão, utilizando a pesquisa abaixo. Fique atento ao detalhe de que o resultado desta pesquisa é uma lista de exemplares e não de registros bibliográficos.</p>\n<p>Após encontrar o(s) exemplare(s) de interesse, use o botão <strong>"Selecionar exemplar"</strong> para adicioná-los à lista de impressão de etiquetas. Você poderá fazer diversas pesquisas, sem perder a seleção feita anteriormente. Quando finalmente estiver satisfeito com a seleção, clique no botão <strong>"Imprimir etiquetas"</strong>. Será possível selecionar qual modelo da folha de etiquetas a ser usado e de qual posição iniciar.</p>',
  "cataloging.tab.record.custom.field_label.biblio_590": "Notas locais",
  "cataloging.tab.record.custom.field_label.biblio_110": "Autor",
  "marc.bibliographic.datafield.260.subfield.f": "Informações adicionais",
  "marc.bibliographic.datafield.260.subfield.g": "Data de impressão",
  "cataloging.tab.record.custom.field_label.biblio_111": "Autor Evento",
  "cataloging.tab.record.custom.field_label.biblio_595": "Notas",
  "marc.bibliographic.datafield.260.subfield.b": "Nome da editora",
  "marc.bibliographic.datafield.600.subfield.a":
    "Sobrenome e-ou prenome do autor",
  "circulation.custom.user_field.id_rg": "Identidade",
  "marc.bibliographic.datafield.260.subfield.c": "Data de publicação ",
  "marc.bibliographic.datafield.600.subfield.c":
    "Título e outras palavras associadas ao nome",
  "marc.bibliographic.datafield.260.subfield.e": "Nome do impressor",
  "marc.bibliographic.datafield.600.subfield.b":
    "Numeração que segue o prenome",
  "marc.bibliographic.datafield.600.subfield.d": "Datas associadas ao nome",
  "cataloging.record.error.save": "Falha ao salvar o Registro",
  "marc.bibliographic.datafield.260.subfield.a":
    "Local de publicação, distribuição, etc.",
  "administration.z3950.page_help":
    "<p>A rotina de Servidores Z39.50 permite o cadastramento e pesquisa dos Servidores utilizados pela rotina de Pesquisa Distribuída. Para realizar o cadastramento serão necessários os dados da Coleção Z39.50, assim como endereço URL e porta de acesso.</p>\n<p>Ao acessar essa rotina, o Biblivre listará automaticamente todos os Servidores previamente cadastrados.  Você poderá então filtrar essa lista, digitando o <em>Nome</em> de um Servidor que queira encontrar.</p>",
  "label.login": "Entrar",
  "cataloging.import.upload_popup.title": "Abrindo Arquivo",
  "marc.bibliographic.datafield.600.subfield.k": "Subcabeçalhos",
  "menu.multi_schema_translations": "Traduções",
  "search.common.button.filter": "Filtrar",
  "marc.bibliographic.datafield.600.subfield.q": "Forma completa do nome",
  "acquisition.order.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "cataloging.bibliographic.selected_records_singular":
    "{0} registro selecionado",
  "field.error.digits_only": "Este campo deve ser preenchido com números",
  "marc.bibliographic.datafield.600.subfield.t":
    "Título da obra junto a entrada",
  "acquisition.order.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de Pedido?",
  "administration.setup.biblivre3restore.error.description":
    "Infelizmente ocorreu um erro ao restaurar este backup do Biblivre 3. Verifique a próxima tela pelo log de erros e, caso necessário, entre no fórum Biblivre para obter ajuda.",
  "administration.translations.error.save":
    "Não foi possível salvar as traduções",
  "cataloging.import.upload_popup.uploading": "Enviando arquivo...",
  "administration.maintenance.backup.error.invalid_origin_schema":
    "O Backup não possui a biblioteca selecionada",
  "marc.bibliographic.datafield.520.subfield.u": "URI",
  "circulation.user.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "marc.vocabulary.datafield.450": "UP (remissiva para TE não usado)",
  "acquisition.request.field.author_numeration":
    "Numeração que segue o prenome",
  "marc.bibliographic.datafield.240.indicator.2.5": "5 caracteres a desprezar",
  "marc.bibliographic.datafield.240.indicator.2.6": "6 caracteres a desprezar",
  "cataloging.holding.availability.available": "Disponível",
  "marc.bibliographic.datafield.240.indicator.2.3": "3 caracteres a desprezar",
  "marc.bibliographic.datafield.240.indicator.2.4": "4 caracteres a desprezar",
  "marc.bibliographic.datafield.240.indicator.2.1": "1 caractere a desprezar",
  "marc.bibliographic.datafield.490.subfield.b":
    "Número do volume ou designação sequencial da série",
  "marc.bibliographic.datafield.240.indicator.2.2": "2 caracteres a desprezar",
  "marc.bibliographic.datafield.490.subfield.a": "Título da série",
  "administration.maintenance.backup.description_last_backups_1":
    "Abaixo estão os links para download dos últimos backups realizados. É importante guardá-los em um local seguro, pois esta é a única forma de recuperar seus dados, caso necessário.",
  "marc.bibliographic.datafield.913.subfield.a": "Código local",
  "administration.maintenance.backup.description_last_backups_2":
    'Estes arquivos estão guardados no diretório especificado na configuração do Biblivre (<em>"Administração"</em>, <em>"Configurações"</em>, no menu superior). Caso este diretório não esteja disponível para escrita no momento do backup, um diretório temporário será usado em seu lugar. Por este motivo, alguns dos backups podem não estar disponíveis após certo tempo. <span class="attention">Recomendamos sempre fazer o download do backup e guardá-lo em um local seguro.</span>',
  "marc.bibliographic.datafield.240.indicator.2.0":
    "Nenhum caractere a desprezar",
  "search.bibliographic.id": "N&ordm; do registro",
  "marc.bibliographic.datafield.240.indicator.2.9": "9 caracteres a desprezar",
  "administration.maintenance.backup.wait": "Aguarde",
  "administration.user_type.field.name": "Tipo de Usuário",
  "marc.bibliographic.datafield.240.indicator.2.7": "7 caracteres a desprezar",
  "administration.maintenance.backup.error.couldnt_unzip_backup":
    "Não foi possível descompactar o backup selecionado",
  "marc.bibliographic.datafield.240.indicator.2.8": "8 caracteres a desprezar",
  "administration.setup.biblivre3import.log_header":
    "[Log de importação de dados do Biblivre 3 para o Biblivre 5]",
  "common.block": "Bloquear",
  "marc.authorities.datafield.400.subfield.a":
    "Sobrenome e/ou Prenome do autor",
  "marc.bibliographic.datafield.555": "Nota de Índice Cumulativo ou Remissivo",
  "administration.permissions.items.administration_configurations":
    "Gerenciar configurações",
  "marc.bibliographic.datafield.490.subfield.v":
    "Número do volume ou designação sequencial da série",
  "administration.accesscards.success.block": "Cartão bloqueado com sucesso",
  "marc.bibliographic.datafield.300.subfield.3":
    "Especificação Material adicional",
  "administration.reports.field.marc_field": "Campo Marc",
  "cataloging.database.private": "Privativa",
  "marc.bibliographic.datafield.550": "TG (termo genérico)",
  "administration.configuration.title.general.title": "Nome da biblioteca",
  "administration.reports.success.generate":
    "Relatório gerado com sucesso. O mesmo será aberto em outra página.",
  "administration.reports.field.date": "Data",
  "acquisition.request.confirm_delete_record_title":
    "Excluir registro de requisição",
  "administration.reports.select.option.custom_count":
    "Contagem de Registros Bibliográficos por Campo Marc",
  "administration.translations.error.invalid_file": "Arquivo inválido",
  "administration.translations.save": "Salvar traduções",
  "acquisition.order.field.id": "N&ordm; do registro",
  "circulation.user.button.save": "Salvar",
  "acquisition.request.page_help":
    "<p>A rotina de Requisições permite o cadastramento e pesquisa de requisições de obras. Uma requisição é um registro de alguma obra que a Biblioteca deseja adquirir, e pode ser utilizada para se realizar Cotações com os Fornecedores previamente cadastrados.</p>\n<p>A pesquisa buscará cada um dos termos digitados nos campos <em>Requerente, Autor ou Título</em>.</p>",
  "circulation.reservation.record_list_reserved":
    "Listar apenas registros reservados",
  "administration.permissions.items.administration_usertype_save":
    "Salvar registro de tipo de usuário",
  "cataloging.authorities.indexing_groups.author": "Autor",
  "circulation.users.failure.delete": "Falha ao excluir usuário",
  "cataloging.vocabulary.confirm_cancel_editing_title":
    "Cancelar edição de registro de vocabulário",
  "marc.bibliographic.datafield.340.subfield.e": "Suporte",
  "administration.accesscards.change_status.unblock":
    "O Cartão será desbloqueado e estará disponível para uso",
  "marc.bibliographic.datafield.740.indicator.2": "Tipo de entrada secundária",
  "marc.bibliographic.datafield.300.subfield.a": "Número de páginas",
  "marc.bibliographic.datafield.340.subfield.a":
    "Base e configuração do material",
  "marc.bibliographic.datafield.300.subfield.b": "Ilustrador",
  "marc.bibliographic.datafield.340.subfield.b": "Dimensões",
  "marc.bibliographic.datafield.520.subfield.a": "Notas de resumo",
  "marc.bibliographic.datafield.740.indicator.1":
    "Número de caracteres a serem desprezados na alfabetação",
  "marc.bibliographic.datafield.300.subfield.c": "Dimensões",
  "marc.bibliographic.datafield.340.subfield.c":
    "Materiais aplicados à superfície",
  "administration.permissions.items.circulation_list": "Listar usuários",
  "marc.bibliographic.datafield.340.subfield.d":
    "Técnica em que se registra a informação",
  "administration.reports.biblivre_report_header": "Relatórios Biblivre",
  "marc.bibliographic.datafield.360.subfield.a": "Termo tópico adotado",
  "cataloging.bibliographic.button.delete": "Excluir",
  "marc.bibliographic.datafield.500.subfield.a": "Notas gerais",
  "marc.bibliographic.datafield.580.subfield.a": "Nota de Ligação",
  "administration.permissions.items.administration_usertype_delete":
    "Excluir registro de tipo de usuário",
  "field.error.min_length": "Este campo deve possuir no mínimo {0} caracteres",
  "administration.reports.title.holdings_by_date":
    "Relatório de Cadastro de Exemplares",
  "circulation.reservation.delete_success": "Reserva excluída com sucesso",
  "cataloging.tab.record.custom.field_label.vocabulary_750": "Termo Tópico",
  "marc.bibliographic.datafield.600.indicator.1": "Forma de entrada",
  "administration.setup.biblivre4restore.confirm_title": "Restaurar Backup",
  "marc.bibliographic.datafield.300.subfield.e": "Material adicional",
  "format.date_user_friendly": "DD/MM/AAAA",
  "marc.bibliographic.datafield.300.subfield.f":
    "Tipo de unidade de armazenamento",
  "marc.bibliographic.datafield.300.subfield.g":
    "Tamanho da unidade de armazenamento",
  "administration.reports.field.user_data": "Dados",
  "circulation.user.confirm_delete_record_title.forever": "Excluir usuário",
  "marc.bibliographic.datafield.257.subfield.a": "País da entidade produtora",
  "cataloging.error.invalid_data":
    "Não foi possível processar a operação. Por favor, tente novamente.",
  "cataloging.vocabulary.indexing_groups.all": "Qualquer campo",
  "marc.bibliographic.datafield.500": "Notas",
  "administration.reports.title.late_lendings":
    "Relatório de Empréstimos Atrasados",
  "marc.bibliographic.datafield.501": 'Notas iniciadas com a palavra "com"',
  "administration.configuration.description.search.distributed_search_limit":
    "Esta configuração representa a quantidade máxima de resultados que serão encontrados em uma pesquisa distribuída. Evite o uso de um limite muito elevado pois as buscas distribuídas levarão muito tempo para retornar os resultados pesquisados.",
  "marc.bibliographic.datafield.502": "Notas de dissertação ou tese",
  "marc.bibliographic.datafield.700.subfield.t":
    "Título da obra junto à entrada",
  "marc.vocabulary.datafield.040.subfield.d": "Agência que alterou o registro",
  "marc.bibliographic.datafield.504": "Notas de bibliografia",
  "marc.vocabulary.datafield.040.subfield.c":
    "Agência que transcreveu o registro em formato legível por máquina",
  "circulation.reservation.expiration_date": "Data de expiração da reserva",
  "marc.bibliographic.datafield.505": "Notas de conteúdo",
  "marc.vocabulary.datafield.040.subfield.b": "Idioma da catalogação",
  "marc.bibliographic.datafield.700.subfield.q": "Forma completa do nome",
  "marc.vocabulary.datafield.040.subfield.a": "Código da Agência Catalogadora",
  "cataloging.vocabulary.indexing_groups.vt_ta_term":
    "Termo Associado (VT / TA)",
  "circulation.custom.user_field.gender": "Gênero",
  "marc.bibliographic.datafield.700.subfield.l": "Língua do texto",
  "administration.reports.option.database.main": "Principal",
  "marc.bibliographic.datafield.700.subfield.e": "Relação com o documento",
  "marc.bibliographic.datafield.700.subfield.d": "Datas associadas ao nome",
  "marc.bibliographic.datafield.700.subfield.c":
    "Título e outras palavras associadas ao nome",
  "marc.bibliographic.datafield.700.subfield.b":
    "Numeração que segue o prenome",
  "marc.bibliographic.datafield.700.subfield.a":
    "Sobrenome e-ou prenome do autor",
  "marc.vocabulary.datafield.040.subfield.e":
    "Fontes convencionais de descrições de dados",
  "administration.setup.biblivre4restore.select_digital_media":
    "Selecione um Backup de Mídias Digitais",
  "administration.migration.migrate.success": "Dados importados com sucesso",
  "administration.maintenance.backup.error.no_schema_selected":
    "Nenhuma biblioteca selecionada",
  "marc.bibliographic.datafield.515": "Nota de Peculiaridade na Numeração",
  "administration.reports.title.all_users": "Relatório Geral de Usuários",
  "common.deleted": "Excluído",
  "marc.bibliographic.datafield.521": "Notas de público alvo",
  "search.bibliographic.title": "Título",
  "cataloging.record.success.move": "Registros movidos com sucesso",
  "administration.reports.select.option.all_users":
    "Relatório de Todos os Usuários",
  "marc.bibliographic.datafield.525": "Nota de Suplemento",
  "marc.bibliographic.datafield.610.subfield.x": "Subdivisão geral",
  "marc.bibliographic.datafield.610.subfield.y": "Subdivisão cronológico",
  "marc.bibliographic.datafield.610.subfield.z": "Subdivisão geográfico",
  "acquisition.order.confirm_delete_record_title": "Excluir registro de Pedido",
  "marc.bibliographic.datafield.630.subfield.x": "Subdivisão geral",
  "marc.holding.datafield.852.indicator.1._": "Nenhuma informação fornecida",
  "menu.administration": "Administração",
  "administration.reports.title.searches_by_date":
    "Relatório de Total de Pesquisas por Período",
  "marc.bibliographic.datafield.630.subfield.y": "Subdivisão cronológico",
  "marc.bibliographic.datafield.630.subfield.z": "Subdivisão geográfico",
  "marc.bibliographic.datafield.650.subfield.x": "Subdivisão geral",
  "marc.bibliographic.datafield.650.subfield.y": "Subdivisão cronológico",
  "marc.bibliographic.datafield.650.subfield.z": "Subdivisão geográfico",
  "administration.permissions.items.circulation_reservation_reserve":
    "Realizar reservas",
  "menu.acquisition_order": "Pedidos",
  "menu.acquisition_request": "Requisições",
  "administration.usertype.confirm_cancel_editing_title":
    "Cancelar edição do Tipo de Usuário",
  "multi_schema.restore.limit.title": "Bibliotecas no arquivo selecionado",
  "marc.bibliographic.datafield.520": "Notas de resumo",
  "acquisition.supplier.field.complement": "Complemento",
  "marc.bibliographic.datafield.210.subfield.b": "Qualificador",
  "marc.bibliographic.datafield.534": "Notas de fac-símile",
  "marc.holding.datafield.852.indicator.1.7": "Classificação específica",
  "marc.bibliographic.datafield.210.subfield.a": "Título Abreviado",
  "marc.holding.datafield.852.indicator.1.8": "Outro esquema",
  "marc.bibliographic.datafield.630.subfield.d":
    "Data que aparece junto ao título uniforme na entrada",
  "administration.permissions.items.circulation_lending_list":
    "Listar empréstimos",
  "marc.bibliographic.datafield.630.subfield.a":
    "Título uniforme atribuído ao documento",
  "marc.bibliographic.datafield.670.subfield.a": "Nome retirado de",
  "marc.bibliographic.datafield.670.subfield.b": "Informações encontradas",
  "administration.reports.fieldset.author": "Pesquisa por Autor",
  "marc.bibliographic.datafield.610.subfield.c":
    "Local de realização do evento",
  "marc.bibliographic.datafield.610.subfield.d": "Data da realização do evento",
  "marc.bibliographic.datafield.250.subfield.b": "Informações adicionais",
  "digitalmedia.error.no_file_uploaded": "Nenhum arquivo foi enviado",
  "marc.bibliographic.datafield.250.subfield.a": "Indicação da edição",
  "administration.reports.field.user_type": "Tipo de Usuário",
  "marc.bibliographic.datafield.610.subfield.a": "Nome da entidade ou do lugar",
  "cataloging.database.private_full": "Base Privativa",
  "marc.bibliographic.datafield.610.subfield.b": "Unidades subordinadas",
  "marc.bibliographic.datafield.610.subfield.k":
    "Subcabeçalho. (emendas, protocolos, seleção, etc)",
  "marc.bibliographic.datafield.610.subfield.l": "Língua do texto",
  "marc.bibliographic.datafield.630.subfield.p":
    "Nome da parte - seção da obra",
  "marc.bibliographic.datafield.610.subfield.n":
    "Número da parte - seção da obra - ordem do evento",
  "marc.bibliographic.datafield.610.subfield.g": "Informações adicionais",
  "administration.migration.groups.acquisition":
    "Aquisições (Fornecedor, Requisição, Cotação e Pedido)",
  "marc.bibliographic.datafield.630.subfield.g": "Informações adicionais",
  "marc.holding.datafield.852.indicator.1.1": "CDD",
  "marc.bibliographic.datafield.610.subfield.t":
    "Título da obra junto à entrada",
  "marc.holding.datafield.852.indicator.1.2":
    "National Library of Medicine Classification",
  "marc.bibliographic.datafield.630.subfield.f":
    "Data da edição do item que está sendo processado",
  "marc.holding.datafield.852.indicator.1.0": "Classificação da LC",
  "marc.bibliographic.datafield.630.subfield.k": "Subcabeçalhos",
  "marc.holding.datafield.852.indicator.1.5": "Título",
  "marc.bibliographic.datafield.630.subfield.l":
    "Língua do texto. Idioma do texto por extenso",
  "marc.holding.datafield.852.indicator.1.6": "Em parte separado",
  "marc.bibliographic.datafield.530":
    "Notas de disponibilidade de forma física",
  "marc.bibliographic.datafield.650.subfield.a": "Assunto tópico",
  "marc.holding.datafield.852.indicator.1.3":
    "Superintendent of Documents classification",
  "digitalmedia.error.file_not_found":
    "O arquivo especificado não foi encontrado",
  "marc.holding.datafield.852.indicator.1.4": "Localização fixa",
  "administration.brief_customization.separators.dot-space": "Ponto - espaço",
  "circulation.custom.user_field.address_zip": "CEP",
  "multi_schema.manage.error.cant_disable_last_library":
    "Não é possível desabilitar todas as bibliotecas deste grupo. Ao menos uma deve ficar habilitada.",
  "administration.configuration.title.administration.z3950.server.active":
    "Servidor z39.50 local ativo",
  "search.distributed.subject": "Assunto",
  "login.welcome": "Seja bem-vindo ao Biblivre V",
  "circulation.user.button.block": "Bloquear",
  "acquisition.request.field.quantity": "Quantidade de exemplares",
  "cataloging.form.hidden_subfields_plural": "Exibir {0} subcampos ocultos",
  "error.runtime_error": "Erro inesperado durante a execução da tarefa",
  "circulation.user.user_deleted": "Usuário excluído do sistema",
  "acquisition.quotation.field.supplier": "Fornecedor",
  "aquisition.quotation.error.quotation_not_found":
    "Não foi possível encontrar a cotação",
  "administration.translations.upload.description":
    "Selecione abaixo o arquivo de idioma que deseja enviar para processamento pelo Biblivre 5.",
  "cataloging.import.no_records_found": "Nenhum registro encontrado",
  "circulation.user.confirm_cancel_editing_title": "Cancelar edição de usuáro",
  "multi_schema.manage.new_schema.field.schema": "Atalho da Biblioteca",
  "administration.setup.biblivre3restore.field.upload_file":
    "Selecionar arquivo de backup",
  "circulation.users.success.unblock": "Usuário desbloqueado com sucesso",
  "administration.accesscards.status.blocked": "Bloqueado",
  "circulation.access_control.user_has_no_card":
    "Não há cartão associado a este usuário",
  "administration.z3950.field.url": "URL",
  "circulation.users.success.disable": "Sucesso ao marcar usuário como inativo",
  "marc.vocabulary.datafield.040": "Fonte da Catalogação (NR)",
  "administration.permissions.items.circulation_lending_lend":
    "Realizar empréstimos de obras",
  "marc.bibliographic.datafield.150": "TE",
  "acquisition.quotation.field.requisition": "Requisição",
  "acquisition.order.field.deadline_date": "Data de Vencimento",
  "administration.configuration.invalid_backup_path":
    "Caminho inválido. Este diretório não existe ou o Biblivre não possui permissão de escrita.",
  "administration.permissions.items.circulation_reservation_list":
    "Listar reservas",
  "cataloging.record.success.delete": "Registro excluído com sucesso",
  "error.invalid_user": "Usuário inválido ou inexistente",
  "marc.material_type.manuscript": "Manuscrito",
  "administration.brief_customization.page_help":
    "<p>A rotina de Personalizaçao de Resumo Catalográfico permite configurar quais campos e subcampos MARC serão apresentados nas rotinas de Catalogação Bibliográfica, de Autoridades e de Vocabulários.  Os campos e subcampos configurados aqui serão apresentados na aba de Resumo Catalográfico nas rotinas de Catalogação. Você poderá configurar a ordem dos campos e subcampos, assim como os separadores que irão aparecer entre os subcampos.</p><p>Os campos exibidos nesta tela são os campos disponíveis no Formulário Catalográfico. Para criar novos campos, ou alterar seus subcampos, utilize a tela de <b>Personalização de Formulário Catalográfico.</b></p>",
  "administration.permissions.items.circulation_save":
    "Salvar registro de usuário",
  "marc.vocabulary.datafield.150.subfield.a": "Termo tópico adotado",
  "marc.bibliographic.datafield.856.subfield.y": "Link em texto",
  "administration.translations.download.field.languages": "Idioma",
  "cataloging.authorities.indexing_groups.event": "Evento",
  "marc.bibliographic.datafield.856.subfield.u": "URI",
  "cataloging.import.type.biblio": "Registro bibliográfico",
  "search.bibliographic.holdings_count": "Exemplares",
  "administration.translations.upload_popup.title": "Enviando Arquivo",
  "administration.reports.select.option.acquisition":
    "Relatório de Pedidos de Aquisição Efetuados Por Período",
  "acquisition.quotation.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "cataloging.authorities.other_name": "Outra Forma do nome",
  "acquisition.quotation.error.no_quotation_found":
    "Nenhuma cotação encontrada",
  "administration.setup.biblivre4restore.error.description":
    "Infelizmente ocorreu um erro ao restaurar este backup do Biblivre 5. Verifique a próxima tela pelo log de erros e, caso necessário, entre no fórum Biblivre para obter ajuda.",
  "cataloging.database.main_full": "Base Principal",
  "marc.bibliographic.datafield.856.subfield.d": "Caminho",
  "marc.bibliographic.datafield.856.subfield.f": "Nome do arquivo",
  "marc.vocabulary.datafield.150.subfield.i": "Qualificador",
  "acquisition.order.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este registro de Pedido?",
  "marc.bibliographic.datafield.100.subfield.a":
    "Sobrenome e/ou prenome do autor",
  "administration.reports.title": "Relatórios",
  "marc.bibliographic.datafield.100.subfield.b":
    "Numeração que segue o prenome",
  "administration.reports.select.option.bibliography":
    "Relatório de Bibliografia do Autor",
  "marc.vocabulary.datafield.150.subfield.x": "Subdivisão geral adotada",
  "administration.configuration.description.general.currency":
    "Esta configuração representa a moeda que será utilizada em multas e no módulo de aquisição.",
  "acquisition.supplier.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de fornecedor?",
  "administration.permissions.select.default": "Selecione uma opção",
  "cataloging.import.isbn_already_in_database":
    "Já existe um registro com este ISBN na base de dados",
  "marc.vocabulary.datafield.150.subfield.z": "Subdivisão geográfica adotada",
  "marc.material_type.all": "Todos",
  "marc.vocabulary.datafield.150.subfield.y": "Subdivisão cronológica adotada",
  "marc.authorities.datafield.111.subfield.g": "Informações adicionais",
  "marc.bibliographic.datafield.100.subfield.q": "Forma completa do nome",
  "acquisition.request.field.status": "Situação",
  "marc.authorities.datafield.111.subfield.d": "Data da realização do evento",
  "marc.authorities.datafield.111.subfield.c": "Local de realização do evento",
  "circulation.lending.button.select_reader": "Selecionar leitor",
  "marc.authorities.datafield.111.subfield.e": "Nome de subunidades do evento",
  "search.bibliographic.simple_term_title": "Preencha os termos da pesquisa",
  "administration.form_customization.button_add_field": "Adicionar Campo",
  "marc.bibliographic.datafield.100.subfield.c":
    "Título e outras palavras associadas ao nome",
  "marc.authorities.datafield.111.subfield.k": "Subcabeçalhos",
  "marc.bibliographic.datafield.100.subfield.d": "Datas associadas ao nome",
  "marc.authorities.datafield.111.subfield.n": "Número de ordem do evento",
  "administration.brief_customization.aggregators.left-parenthesis":
    "Abre parênteses",
  "administration.reports.select.option.records":
    "Relatório de Inclusões de Obras por Período",
  "administration.configurations.save.success":
    "Configurações alteradas com sucesso",
  "administration.z3950.success.update":
    "Servidor z39.50 atualizado com sucesso",
  "administration.accesscards.change_status.block":
    "O Cartão será bloqueado e estará indisponível para uso",
  "acquisition.quotation.error.save": "Falha ao salvar a cotação",
  "marc.bibliographic.datafield.700.indicator.2.2": "entrada analítica",
  "cataloging.tab.record.custom.field_label.biblio_700": "Autor secundário",
  "administration.z3950.confirm_delete_record_title.forever":
    "Excluir Servidor Z39.50",
  "administration.permissions.items.administration_accesscards_delete":
    "Excluir cartões de acesso",
  "field.error.required": "O preenchimendo deste campo é obrigatório",
  "administration.permissions.items.circulation_print_user_cards":
    "Imprimir carteirinhas",
  "administration.configuration.description.logged_out_text":
    "Texto que será exibido na tela inicial do Biblivre, para usuários que não tenham entrado com login e senha. Você pode usar tags HTML, mas cuidado para não quebrar o layout do Biblivre 5. Atenção: esta configuração está relacionada com o sistema de traduções. Alterações feitas nesta tela afetarão somente o idioma atual. Para alterar em outros idiomas, use a tela de traduções ou acesse o Biblivre usando o idioma a ser alterado.",
  "cataloging.import.source_search_title":
    "Importar registros a partir de uma pesquisa Z39.50",
  "circulation.accesscards.select_card": "Selecionar Cartão",
  "administration.translations.upload.button": "Enviar o idioma",
  "marc.bibliographic.datafield.580": "Nota de Ligação",
  "administration.accesscards.add_multiple_cards":
    "Cadastrar Sequência de Cartões",
  "marc.bibliographic.datafield.100": "Autor - Nome pessoal",
  "administration.setup.biblivre3import.success":
    "Importação de dados do Biblivre 3",
  "acquisition.supplier.page_help":
    "<p>A rotina de Fornecedores permite o cadastramento e pesquisa de fornecedores. A pesquisa buscará cada um dos termos digitados nos campos <em>Nome Fantasia, Razão Social ou CNPJ</em>.</p>",
  "circulation.access_control.page_help":
    '<p>O <strong>"Controle de Acesso"</strong> permite gerenciar a entrada e permanência dos leitores nas instalações da biblioteca. Selecione o leitor através de uma pesquisa por nome ou matrícula e digite o número de um cartão de acesso disponível para vincular aquele cartão ao leitor.</p>\n<p>No momento da saída do leitor, você poderá desvincular o cartão procurando pelo código do mesmo</p>',
  "acquisition.quotation.confirm_delete_record_title.forever":
    "Excluir registro de cotação",
  "administration.user_type.error.type_has_users":
    "Este Tipo de Usuário possui Usuários cadastrados",
  "marc.bibliographic.datafield.590": "Notas locais",
  "acquisition.quotation.field.expiration_date": "Data de Validade da Cotação",
  "marc.bibliographic.datafield.110": "Autor - Entidade coletiva",
  "marc.bibliographic.datafield.111": "Autor - Evento",
  "marc.bibliographic.datafield.595": "Notas para inclusão em bibliografias",
  "acquisition.supplier.success.update": "Fornecedor salvo com sucesso",
  "administration.form_customization.subfield_autocomplete.disabled":
    "Desabilitado",
  "menu.circulation_lending": "Empréstimos e Devoluções",
  "acquisition.supplier.field.trademark": "Nome Fantasia",
  "administration.accesscards.error.start_less_than_or_equals_end":
    "O Número inicial deve ser menor ou igual ao Número final",
  "circulation.lending.receipt.lendings": "Empréstimos",
  "circulation.lending.users.title": "Pesquisar Leitor",
  "administration.translations.success.save":
    "Arquivo de idiomas processado com sucesso",
  "administration.reports.field.datafield": "Campo MARC",
  "multi_schema.restore.restore_with_original_schema_name":
    "Restaurar esta biblioteca usando seu endereço original",
  "marc.bibliographic.datafield.555.indicator.1":
    "Controle de constante na exibição",
  "menu.multi_schema_configurations": "Configurações",
  "marc.bibliographic.datafield.947.subfield.a": "Sigla da biblioteca",
  "administration.configuration.printer_type.printer_common":
    "Impressora comum",
  "marc.bibliographic.datafield.410.subfield.a": "Nome da entidade ou do lugar",
  "marc.bibliographic.datafield.450.subfield.a": "Termo tópico não usado",
  "marc.bibliographic.datafield.947.subfield.d": "Ano da última aquisição",
  "marc.bibliographic.datafield.947.subfield.e": "Localização",
  "marc.bibliographic.datafield.947.subfield.b":
    "Descrição da coleção impressa",
  "marc.bibliographic.datafield.947.subfield.c": "Tipo de aquisição",
  "circulation.user_cards.button.select_page":
    "Selecionar usuários desta página",
  "marc.bibliographic.datafield.947.subfield.i":
    "Descrição do índice com acesso on-line",
  "menu.search_bibliographic": "Bibliográfica",
  "marc.bibliographic.datafield.947.subfield.f": "Código da biblioteca no CCN",
  "marc.bibliographic.datafield.947.subfield.g":
    "Descrição do índice de coleção impressa",
  "marc.bibliographic.datafield.830.subfield.a": "Título Uniforme",
  "marc.bibliographic.datafield.947.subfield.l":
    "Descrição da coleção em microficha",
  "marc.bibliographic.datafield.947.subfield.m":
    "Descrição do índice em microficha",
  "marc.bibliographic.datafield.947.subfield.j":
    "Descrição da coleção em CD-ROM",
  "marc.bibliographic.datafield.947.subfield.k":
    "Descrição do índice em CD-ROM",
  "administration.user_type.success.save":
    "Tipo de Usuário incluído com sucesso",
  "marc.bibliographic.datafield.947.subfield.p":
    "Descrição da coleção em multimeio",
  "marc.bibliographic.datafield.947.subfield.q":
    "Descrição do índice em multimeio",
  "marc.bibliographic.datafield.947.subfield.n":
    "Descrição da coleção em microfilme",
  "marc.bibliographic.datafield.947.subfield.o":
    "Descrição do índice em microfilme",
  "acquisition.supplier.confirm_delete_record.forever":
    "Ele será excluído permanentemente do sistema e não poderá ser recuperado",
  "marc.bibliographic.datafield.947.subfield.t":
    "Descrição da coleção em outros suportes",
  "marc.bibliographic.datafield.947.subfield.u":
    "Descrição do índice em outros suportes",
  "administration.permissions.groups.cataloging": "Catalogação",
  "marc.bibliographic.datafield.947.subfield.r":
    "Descrição da coleção em braile",
  "marc.bibliographic.datafield.947.subfield.s":
    "Descrição do índice em braile",
  "marc.bibliographic.datafield.830.subfield.v":
    "Número do volume ou designação sequencial da série",
  "marc.bibliographic.datafield.130": "Obra anônima",
  "cataloging.import.title": "Importação de Registros",
  "marc.bibliographic.datafield.947.subfield.z": "Nota padrão",
  "administration.accesscards.change_status.cancel":
    "O Cartão será cancelado e estará indisponível para uso",
  "administration.configuration.title.general.psql_path":
    "Caminho para o programa psql",
  "marc.bibliographic.datafield.041.indicator.1.0":
    "Item não é e não inclui tradução",
  "marc.vocabulary.datafield.680.subfield.a": "Nota de escopo",
  "administration.accesscards.error.block": "Falha ao bloquear o Cartão",
  "administration.permissions.items.cataloging_authorities_delete":
    "Excluir registro de autoridade",
  "marc.bibliographic.datafield.258.subfield.a": "Jurisdição emissora",
  "marc.bibliographic.datafield.258.subfield.b": "Denominação",
  "administration.configuration.description.general.pg_dump_path":
    "Atenção: Esta é uma configuração avançada, porém importante. O Biblivre tentará encontrar automaticamente o caminho para o programa <strong>pg_dump</strong> e, exceto em casos onde seja exibido um erro abaixo, você não precisará alterar esta configuração. Esta configuração representa o caminho, no servidor onde o Biblivre está instalado, para o executável <strong>pg_dump</strong> que é distribuído junto do PostgreSQL. Caso esta configuração estiver inválida, o Biblivre não será capaz de gerar cópias de segurança.",
  "administration.brief_customization.separators.semicolon-space":
    "Ponto e vírgula - espaço",
  "administration.user_type.success.update":
    "Tipo de Usuário salvo com sucesso",
  "administration.configurations.error.invalid_writable_path":
    "Caminho inválido. Este diretório não existe ou o Biblivre não possui permissão de escrita.",
  "marc.holding.datafield.541.subfield.3": "Especificações do material",
  "multi_schema.backup.display_and_select_libraries":
    "Exibir e selecionar bibliotecas {min} a {max}",
  "administration.z3950.success.save": "Servidor z39.50 salvo com sucesso",
  "cataloging.record.error.move": "Falha ao mover os Registros",
  "administration.permissions.items.acquisition_quotation_list":
    "Listar cotações",
  "marc.bibliographic.datafield.041.indicator.1.1": "Item é ou inclui tradução",
  "circulation.reservation.holdings.title": "Pesquisar Registro Bibliográfico",
  "marc.vocabulary.datafield.750.subfield.y": "Subdivisão cronológica",
  "marc.vocabulary.datafield.750.subfield.z": "Subdivisão geográfica",
  "administration.reports.field.lendings": "Empréstimos",
  "marc.vocabulary.datafield.750.subfield.x": "Subdivisão geral",
  "administration.permissions.items.administration_datamigration":
    "Importar dados do Biblivre 3",
  "cataloging.tab.record.custom.field_label.biblio_611": "Assunto evento",
  "administration.configurations.error.save":
    "Não foi possível salvar as configurações",
  "cataloging.tab.record.custom.field_label.biblio_610":
    "Assunto entidade coletiva",
  "administration.reports.option.database.work": "Trabalho",
  "error.invalid_database": "",
  "cataloging.tab.form.repeat": "Repetir",
  "acquisition.request.error.save": "Falha ao salvar a Requisição",
  "marc.vocabulary.datafield.750.subfield.a": "Termo tópico adotado no tesauro",
  "circulation.user_field.id": "Matrícula",
  "administration.form_customization.field_collapsed": "Colapsado",
  "marc.bibliographic.datafield.100.indicator.1.2":
    "sobrenome composto (obsoleto)",
  "marc.bibliographic.datafield.100.indicator.1.1":
    "sobrenome simples ou composto",
  "marc.bibliographic.datafield.100.indicator.1.3": "nome de família",
  "marc.bibliographic.datafield.100.indicator.1.0":
    "prenome simples ou composto",
  "marc.bibliographic.datafield.700.indicator.1.0":
    "prenome simples ou composto",
  "cataloging.tab.record.custom.field_label.biblio_600": "Assunto pessoa",
  "marc.bibliographic.datafield.700.indicator.1.1":
    "sobrenome simples ou composto",
  "marc.vocabulary.datafield.550.subfield.a": "Termo tópico adotado",
  "error.cannot_create_file": "Não foi possível criar um arquivo temporário",
  "marc.bibliographic.datafield.700.indicator.1.2":
    "sobrenome composto (obsoleto)",
  "marc.bibliographic.datafield.700.indicator.1.3": "nome de família",
  "acquisition.request.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "administration.reports.field.database": "Base",
  "administration.usertype.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste Tipo de Usuário?",
  "administration.usertype.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "marc.vocabulary.datafield.750.indicator.1": "Nível do assunto",
  "marc.vocabulary.datafield.750.indicator.2": "Tesauro",
  "circulation.lending.fine.success_pay_fine": "Multa paga com sucesso",
  "marc.bibliographic.datafield.245.indicator.1.1":
    "Gera entrada para o título",
  "marc.bibliographic.datafield.245.indicator.1.0":
    "Não gera entrada para o título",
  "administration.reports.title.orders_by_date":
    "Relatório de Pedidos por Período",
  "marc.vocabulary.datafield.550.subfield.x": "Subdivisão geral adotada",
  "cataloging.import.isrc_already_in_database":
    "Já existe um registro com este ISRC na base de dados",
  "marc.vocabulary.datafield.550.subfield.y": "Subdivisão cronológica adotada",
  "marc.vocabulary.datafield.550.subfield.z": "Subdivisão geográfica adotada",
  "search.common.distributed_search": "Pesquisa Distribuída",
  "administration.migration.groups.lendings":
    "Empréstimos ativos, histórico de empréstimos e multas",
  "multi_schema.manage.disable": "Desabilitar biblioteca",
  "administration.reports.title.dewey": "Relatório de Classificação Dewey",
  "menu.cataloging_bibliographic": "Bibliográfica",
  "marc.bibliographic.datafield.246.indicator.2.4": "Título da capa",
  "marc.bibliographic.datafield.521.subfield.a": "Notas de público alvo",
  "marc.bibliographic.datafield.246.indicator.2.3": "Outro título",
  "marc.bibliographic.datafield.321.subfield.b":
    "Datas da periodicidade anterior",
  "marc.bibliographic.datafield.246.indicator.2.2": "Título específico",
  "marc.bibliographic.datafield.321.subfield.a": "Peridiocidade Anterior",
  "marc.bibliographic.datafield.246.indicator.2.1": "Título paralelo",
  "marc.bibliographic.datafield.246.indicator.2.8": "Título da lombada",
  "marc.bibliographic.datafield.246.indicator.2.7": "Título corrente",
  "marc.bibliographic.datafield.246.indicator.2.6": "Título de partida",
  "administration.reports.field.lendings_late": "Total de Livros atrasados",
  "marc.bibliographic.datafield.246.indicator.2.5":
    "Título adicional em página de rosto secundária",
  "administration.configurations.error.value_is_required":
    "O preenchimento deste campo é obrigatório",
  "common.step": "Passo",
  "marc.bibliographic.datafield.246.indicator.2.0": "Parte do título",
  "circulation.reservation.button.delete": "Excluir",
  "administration.form_customization.confirm_delete_datafield_title":
    "Excluir Campo",
  "common.delete": "Excluir",
  "acquisition.request.field.author_type": "Tipo de Autor",
  "cataloging.bibliographic.button.new": "Novo registro",
  "search.authorities.simple_search": "Pesquisa de Autoridades",
  "marc.material_type.movie": "Filme",
  "marc.bibliographic.datafield.243.indicator.1.0":
    "Não gera entrada para o título",
  "marc.bibliographic.datafield.243.indicator.1.1":
    "Gera entrada para o título",
  "multi_schema.manage.error.create": "Falha ao criar nova biblioteca.",
  "cataloging.import.marc_popup.title": "Editar Registro MARC",
  "circulation.lending.reserved.warning":
    "Todos os exemplares disponíveis deste registro estão reservados para outros leitores. O empréstimo pode ser efetuado, porém verifique as informações de reservas.",
  "search.bibliographic.author": "Autor",
  "marc.bibliographic.datafield.243.subfield.a": "Título do trabalho",
  "cataloging.import.button.edit_marc": "Editar MARC",
  "cataloging.tab.record.custom.field_label.biblio_651": "Assunto geográfico",
  "cataloging.tab.record.custom.field_label.biblio_650": "Assunto tópico",
  "circulation.custom.user_field.address_number": "Número",
  "common.modified": "Atualizado em",
  "administration.setup.biblivre4restore.log_header":
    "[Log de restauração de backup do Biblivre 5]",
  "marc.bibliographic.datafield.243.subfield.l": "Língua do texto",
  "marc.bibliographic.datafield.243.subfield.k": "Subcabeçalhos",
  "marc.bibliographic.datafield.243.subfield.f": "Data do trabalho",
  "administration.reports.page_help":
    '<p>A rotina de Relatórios permite a geração e impressão de diversos relatórios disponibilizados pelo Biblivre. Os relatórios disponíveis se dividem entre as rotinas de Aquisição, Catalogação e Circulação.</p>\n<p>Alguns dos relatórios disponíveis possuem filtros, como Base Bibliográfica, ou Período, por exemplo. Para outros, basta selecionar o relatório e clicar em "Emitir Relatório".</p>',
  "marc.bibliographic.datafield.243.subfield.g": "Informações adicionais",
  "administration.accesscards.error.save": "Falha ao salvar o Cartão",
  "administration.reports.field.creation_date": "Data Inclusão",
  "administration.configuration.description.logged_in_text":
    "Texto que será exibido na tela inicial do Biblivre, para usuários que tenham entrado com login e senha. Você pode usar tags HTML, mas cuidado para não quebrar o layout do Biblivre 5. O termo {0} será substituído pelo nome do usuário logado. Atenção: esta configuração está relacionada com o sistema de traduções. Alterações feitas nesta tela afetarão somente o idioma atual. Para alterar em outros idiomas, use a tela de traduções ou acesse o Biblivre usando o idioma a ser alterado.",
  "administration.reports.select.group.circulation": "Circulação",
  "marc.holding.datafield.856.subfield.f": "Nome do arquivo",
  "administration.z3950.error.delete": "Falha ao excluir o servidor z39.50",
  "marc.bibliographic.datafield.080": "Classificação Decimal Universal",
  "marc.bibliographic.datafield.082": "Classificação Decimal Dewey",
  "marc.authorities.datafield.111": "Autor - Evento",
  "marc.authorities.datafield.110": "Autor - Entidade coletiva",
  "acquisition.supplier.field.city": "Cidade",
  "circulation.accesscards.unbind_card": "Devolver Cartão",
  "marc.holding.datafield.856.subfield.d": "Caminho",
  "circulation.custom.user_field.obs": "Observações",
  "marc.holding.datafield.856.subfield.u": "URI",
  "cataloging.bibliographic.button.save_as_new": "Salvar como novo",
  "administration.permissions.confirm_delete_record_question.forever":
    "Você realmente deseja excluir o Login do Usuário?",
  "administration.reports.field.reservation_date": "Data da Reserva",
  "marc.holding.datafield.856.subfield.y": "Link em texto",
  "cataloging.tab.record.custom.field_label.biblio_630":
    "Assunto título uniforme",
  "cataloging.lending.error.holding_unavailable":
    "O exemplar selecionado está indisponível para empréstimos",
  "circulation.reservation.reserve_date": "Data da reserva",
  "acquisition.order.field.quotation": "Cotação",
  "marc.bibliographic.datafield.411.subfield.a": "Nome do evento",
  "administration.permissions.items.acquisition_quotation_save":
    "Salvar registro de cotação",
  "administration.setup.biblivre3import": "Importar dados do Biblivre 3",
  "marc.bibliographic.datafield.090": "Número de chamada - Localização",
  "administration.permissions.items.administration_accesscards_save":
    "Incluir cartões de acesso",
  "marc.authorities.datafield.100": "Autor - Nome pessoal",
  "marc.bibliographic.datafield.095": "Área do conhecimento do CNPq",
  "multi_schema.manage.drop_schema.confirm":
    "Ela será excluída permanentemente do sistema e não poderá ser recuperada",
  "administration.permissions.user_not_found":
    "Não foi possível encontrar o usuário",
  "common.open": "Abrir",
  "administration.setup.biblivre3restore.error": "Erro ao restaurar backup",
  "marc.material_type.score": "Partitura",
  "cataloging.authorities.indexing_groups.other_name": "Outras formas do nome",
  "menu.cataloging_labels": "Impressão de Etiquetas",
  "circulation.lending.return_date": "Data da devolução",
  "acquisition.supplier.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este registro de fornecedor?",
  "administration.translations.upload.title": "Enviar arquivo de idioma",
  "circulation.user_cards.paper_description":
    "{paper_size} {count} etiquetas ({height} mm x {width} mm)",
  "marc.bibliographic.datafield.947": "Informação da Coleção",
  "marc.bibliographic.datafield.949": "Tombo patrimonial",
  "acquisition.request.field.author": "Autor",
  "header.law": "Lei de Incentivo à Cultura",
  "circulation.lending.receipt.expected_return_date": "Data para devolução",
  "text.main.logged_out":
    '<p>O programa <strong>Biblioteca Livre (Biblivre) versão 5.0</strong> é um aplicativo que permite a inclusão digital do cidadão na sociedade da informação. Saiba mais sobre o projeto em <em>"Sobre"</em>, na opção <em>"Ajuda"</em> no menu superior.</p>\n<p>Trata-se de um programa para catalogação e difusão de acervos de bibliotecas públicas e privadas, de variados portes, além de possibilitar a circulação e o compartilhamento de conteúdos de informação, tais como, textos, músicas, imagens e filmes ou qualquer outro tipo de objeto digital.</p>\n<p>Hoje, o <strong>Biblivre</strong> é sucesso em todo o Brasil, assim como no exterior e, por sua extrema relevância cultural, vem se firmando como o aplicativo de escolha para a inclusão digital do cidadão.</p>\n<p>Se desejar somente pesquisar o catálogo e acessar as obras disponíveis digitalmente, utilize a opção <em>"Pesquisa"</em> no menu superior, sem a necessidade de usuário e senha.</p>\n<p>Para outros serviços, tais como circulação, catalogação, aquisição e administração, é necessário um nome de <strong>usuário</strong> e <strong>senha</strong>.</p>',
  "circulation.accesscards.return.success": "Cartão devolvido com sucesso",
  "marc.bibliographic.datafield.750.indicator.2.4": "Source not specified",
  "acquisition.order.title.unit_value": "Valor Unitário",
  "administration.form_customization.change_indicators": "Alterar",
  "search.common.clear_search": "Limpar termos da pesquisa",
  "cataloging.bibliographic.search.holding_accession_number":
    "Tombo patrimonial",
  "marc.bibliographic.datafield.362.indicator.1.1": "Nota não formatada",
  "marc.bibliographic.datafield.362.indicator.1.0": "Estilo formatado",
  "administration.setup.biblivre4restore.success.description":
    "Backup restaurado com sucesso",
  "marc.bibliographic.datafield.750.indicator.2.0":
    "Library of Congress Subject Heading",
  "administration.setup.progress_popup.processing":
    "O Biblivre desta biblioteca está em manutenção. Aguarde até que a mesma seja concluída.",
  "marc.bibliographic.datafield.740.indicator.2._":
    "nenhuma informação fornecida",
  "administration.reports.field.user_signup": "Data de Matrícula",
  "cataloging.tab.record.custom.field_label.biblio_699": "Assunto local",
  "administration.maintenance.reindex.title": "Reindexação da Base de Dados",
  "administration.reports.field.no_data":
    "Não existem dados para gerar este relatório",
  "cataloging.import.import_as": "Importar como:",
  "administration.usertype.confirm_delete_record.forever":
    "O Tipo de Usuário será excluído permanentemente do sistema e não poderá ser recuperado",
  "administration.configuration.description.administration.z3950.server.active":
    'Esta configuração representa se o servidor z39.50 local estará ativo. Nos casos de instalações multi-biblioteca, o nome da Coleção do servidor z39.50 será igual ao nome de cada biblioteca. Por exemplo, o nome da coleção para esta instalação é "{0}".',
  "administration.form_customization.subfield_autocomplete.biblio":
    "Bibliográfico",
  "acquisition.order.field.info": "Observações",
  "administration.brief_customization.confirm_disable_datafield_title":
    "Desabilitar a exibição",
  "marc.bibliographic.datafield.610.indicator.1.1":
    "sobrenome simples ou composto",
  "administration.user_type.page_help":
    "<p>A rotina de Tipos de Usuários permite o cadastramento e pesquisa dos Tipos de Usuários utilizados pela rotina de Cadastro de Usuários. Aqui são definidas informações como Limite de Empréstimos simultâneos, prazos para devolução de empréstimos e valores de multas diárias para cada tipo de usuário separadamente.</p>\n<p>Ao acessar essa rotina, o Biblivre listará automaticamente todos os Tipos de Usuários previamente cadastrados.  Você poderá então filtrar essa lista, digitando o <em>Nome</em> de um Tipo de Usuário que queira encontrar.</p>",
  "marc.bibliographic.datafield.610.indicator.1.2":
    "sobrenome composto (obsoleto)",
  "marc.bibliographic.datafield.610.indicator.1.3": "nome de família",
  "administration.maintenance.backup.title_last_backups": "Últimos Backups",
  "administration.migration.page_help":
    '<p>O módulo de <strong>"Migração de Dados"</strong> permite importar os dados constantes de uma base de dados do Biblivre 3 existente para a base de dados vazia do Biblivre 5.</p>',
  "cataloging.bibliographic.automatic_holding.holding_count":
    "Número de Exemplares",
  "marc.bibliographic.datafield.610.indicator.1.0":
    "prenome simples ou composto",
  "administration.usertype.confirm_delete_record_title.forever":
    "Excluir Tipo de Usuário",
  "cataloging.error.record_not_found": "Registro não encontrado",
  "menu.self_circulation": "Reservas",
  "acquisition.quotation.page_help":
    "<p>A rotina de Cotações permite o cadastramento e pesquisa de cotações (orçamentos) realizadas com os fornecedores cadastrados. Para cadastrar uma nova Cotação, deve-se selecionar um Fornecedor e uma Requisição previamente cadastrados, assim como entrar dados como o valor e a quantidade de obras cotadas.</p>\n<p>A pesquisa buscará cada um dos termos digitados nos campos <em>Número do Registro de Cotação ou Nome Fantasia do Fornecedor</em>.</p>",
  "administration.brief_customization.select_record_type":
    "Selecione o Tipo de Registro",
  "marc.authorities.datafield.110.subfield.a": "Nome da entidade ou do lugar",
  "cataloging.form.hidden_subfields_singular": "Exibir subcampo oculto",
  "marc.authorities.datafield.110.subfield.d": "Data da realização do evento",
  "marc.authorities.datafield.110.subfield.c": "Local de realização do evento",
  "marc.authorities.datafield.110.subfield.b": "Unidades subordinadas",
  "administration.user_type.error.no_user_type_found":
    "Nenhum Tipo de Usuário encontrado",
  "marc.authorities.datafield.110.subfield.l": "Língua do texto",
  "circulation.custom.user_field.address_complement": "Complemento",
  "administration.migration.button.migrate": "Importar dados",
  "marc.authorities.datafield.110.subfield.n":
    "Número da parte seção da obra ordem do evento",
  "administration.permissions.items.cataloging_bibliographic_private_database_access":
    "Acesso à Base Privada.",
  "administration.reports.field.user_status.pending_issues":
    "Possui pendências",
  "administration.setup.cancel": "Cancelar",
  "cataloging.tab.record.custom.field_label.biblio_260": "Imprenta",
  "administration.form_customization.indicator_number": "Indicador",
  "administration.setup.button.show_log": "Exibir log",
  "administration.form_customization.page_help":
    "<p>A rotina de Personalização de Formulário Catalográfico permite configurar quais Campos, Subcampos e Indicadores MARC serão apresentados nas rotinas de Catalogação Bibliográfica, de Autoridades e de Vocabulários. Os Campos, Subcampos e Indicadores configurados aqui serão apresentados na aba de Formulário Catalográfico nas rotinas de Catalogação. Você poderá configurar a ordem dos Campos, Subcampos e Indicadores, assim como editar cada Campo, adicionando ou removendo Subcampos e Indicadores, ou alterando os textos dos elementos MARC.</p>",
  "search.common.on_the_field": "No campo",
  "administration.permissions.confirm_delete_record_title.forever":
    "Excluir Login do Usuário",
  "administration.permissions.items.acquisition_request_delete":
    "Excluir registro de requisição",
  "cataloging.lending.error.limit_exceeded":
    "O leitor selecionado ultrapassou o limite de empréstimos permitidos",
  "search.vocabulary.simple_search": "Pesquisa de Vocabulário",
  "cataloging.tab.record.custom.field_label.vocabulary_685":
    "Nota de Histórico ou Glossário",
  "marc.bibliographic.datafield.360.subfield.y":
    "Subdivisão cronológica adotada",
  "marc.bibliographic.datafield.360.subfield.z":
    "Subdivisão geográfica adotada",
  "marc.bibliographic.datafield.360.subfield.x": "Subdivisão geral adotada",
  "administration.translations.download.button": "Baixar o idioma",
  "acquisition.quotation.success.update": "Cotação salva com sucesso",
  "cataloging.tab.record.custom.field_label.vocabulary_680": "Nota de Escopo",
  "administration.reports.title.holdings_full":
    "Relatório completo de Tombo Patrimonial",
  "marc.bibliographic.datafield.306.subfield.a": "Tempo de duração",
  "administration.user_type.success.delete":
    "Tipo de Usuário excluído com sucesso",
  "cataloging.bibliographic.confirm_cancel_editing_title":
    "Cancelar edição de registro bibliográfico",
  "digitalmedia.error.file_could_not_be_saved":
    "O arquivo enviado não pôde ser salvo",
  "search.common.previous": "Anterior",
  "administration.permissions.items.acquisition_order_delete":
    "Excluir registro de pedido",
  "cataloging.tab.record.custom.field_label.biblio_250": "Edição",
  "cataloging.tab.record.custom.field_label.biblio_255": "Escala",
  "circulation.user.no_reserves": "Este usuário não possui reservas",
  "marc.bibliographic.datafield.913": "Código local",
  "cataloging.tab.record.custom.field_label.biblio_257": "Local de produção",
  "cataloging.tab.record.custom.field_label.biblio_256":
    "Características do arquivo",
  "administration.form_customization.subfield_autocomplete.authorities":
    "Autoridades",
  "cataloging.tab.record.custom.field_label.biblio_258":
    "Informação sobre o material",
  "marc.bibliographic.datafield.246.indicator.2._":
    "nenhuma informação fornecida",
  "administration.configuration.current_value": "Valor atual",
  "circulation.users.failure.block": "Falha ao bloquear o Usuário",
  "administration.setup.biblivre3restore.log_header":
    "[Log de restauração de backup do Biblivre 3]\n\n",
  "circulation.user_field.photo": "Foto",
  "administration.permissions.items.administration_usertype_list":
    "Listar tipos de usuários",
  "circulation.user.no_fines": "Este usuário não possui multas",
  "circulation.reservation.page_help":
    "<p>Para realizar uma reserva você deverá selecionar o leitor para o qual a reserva será realizada e, em seguida, selecionar o registro que será reservado. A pesquisa pelo leitor pode ser feita por nome, matrícula ou outro campo previamente cadastrado. Para encontrar o registro, realize uma pesquisa similar à pesquisa bibliográfica.</p>\n<p>Cancelamentos podem ser feitos selecionando o leitor que possui a reserva.</p><p>A duração da reserva é calculada de acordo com o tipo de usuário, configurado pelo menu <strong>Administração</strong> e definido durante o cadastro do leitor.</p>",
  "administration.translations.download.title": "Baixar arquivo de idioma",
  "cataloging.vocabulary.indexing_groups.te_term": "Termo Específico (TE)",
  "marc.bibliographic.datafield.740.indicator.2.2": "entrada analítica",
  "search.common.in_these_libraries": "Nestas bibliotecas",
  "acquisition.supplier.error.save": "Falha ao salvar o fornecedor",
  "cataloging.tab.record.custom.field_label.biblio_240": "Título uniforme",
  "warning.create_backup":
    "Você está a mais de 3 dias sem gerar uma cópia de segurança (backup)",
  "cataloging.tab.record.custom.field_label.biblio_243":
    "Título uniforme coletivo",
  "cataloging.tab.record.custom.field_label.biblio_245": "Título",
  "multi_schema.manage.new_schema.field.subtitle": "Subtítulo da biblioteca",
  "marc.material_type.nonmusical_sound": "Som não musical",
  "search.bibliographic.open_item_button": "Abrir registro",
  "marc.holding.datafield.541.subfield.f": "Proprietário",
  "cataloging.bibliographic.indexing_groups.total": "Total",
  "marc.holding.datafield.541.subfield.h": "Preço de compra",
  "menu.circulation_user_reservation": "Reservas do Leitor",
  "circulation.reservation.reserve_failure": "Falha ao reservar a obra",
  "marc.holding.datafield.541.subfield.o": "Tipo de unidade",
  "marc.holding.datafield.541.subfield.n": "Quantidade de itens adquiridos",
  "administration.reports.select.group.cataloging": "Catalogação",
  "circulation.lending.button.unavailable": "Indisponível",
  "circulation.user.confirm_delete_record_title.inactive":
    'Marcar usuário como "inativo"',
  "circulation.user_field.type": "Tipo de usuário",
  "marc.holding.datafield.541.subfield.c": "Forma de aquisição",
  "circulation.reservation.reserve_success": "Reserva efetuada com sucesso",
  "marc.holding.datafield.541.subfield.b": "Endereço",
  "administration.migration.groups.cataloging_authorities":
    "Catálogo de Autoridades",
  "administration.permissions.items.administration_accesscards_list":
    "Listar cartões de acesso",
  "marc.holding.datafield.541.subfield.e": "Número atribuído a aquisição",
  "marc.holding.datafield.541.subfield.d": "Data da aquisição",
  "marc.holding.datafield.541.subfield.a": "Nome da fonte",
  "acquisition.order.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "marc.bibliographic.datafield.611.indicator.1": "Forma de entrada",
  "cataloging.tab.record.custom.field_label.vocabulary_670":
    "Origem das Informações",
  "administration.accesscards.change_status.question.unblock":
    "Deseja realmente desbloquear este Cartão?",
  "marc.bibliographic.datafield.600.indicator.1.2":
    "sobrenome composto (obsoleto)",
  "marc.bibliographic.datafield.600.indicator.1.3": "nome de família",
  "circulation.reservation.error.select_reader_first":
    "Para reservar um registro você precisa, primeiramente, selecionar um leitor",
  "marc.bibliographic.datafield.600.indicator.1.0":
    "prenome simples ou composto",
  "marc.bibliographic.datafield.600.indicator.1.1":
    "sobrenome simples ou composto",
  "acquisition.order.field.invoice_number": "N&ordm; da Nota Fiscal",
  "administration.z3950.success.delete": "Servidor z39.50 excluído com sucesso",
  "administration.reports.field.total": "Total",
  "administration.maintenance.backup.backup_not_complete":
    "Backup não finalizado",
  "marc.bibliographic.datafield.685.subfield.i": "Texto explicativo",
  "acquisition.order.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de Pedido?",
  "acquisition.order.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "menu.search": "Pesquisa",
  "login.error.password_not_matching":
    'Os campos "nova senha" e "repita a nova senha" devem ser iguais',
  "administration.configurations.error.value_must_be_boolean":
    "O valor deste campo deve ser verdadeiro ou falso",
  "administration.setup.biblivre3migration.description":
    'Foi detectada uma instalação do Biblivre 3 neste computador. Você poderá importar estes dados para o Biblivre 5 selecionando os itens de interesse e clicando no botão abaixo. Após a importação, <strong>você deverá reindexar as três bases: Bibliográfica, Autoridades e Vocabulário</strong>, através da tela <strong>"Manutenção"</strong> em <strong>"Administração"</strong> e <strong>selecionar novamente as permissões dos funcionários com acesso ao Biblivre</strong>, através da tela <strong>"Logins e Permissões"</strong> em <strong>"Administração"</strong>.',
  "text.main.logged_in":
    '<p>Olá {0},</p>\n<p>Seja bem-vindo ao <strong>Biblioteca Livre (Biblivre) versão 5.0</strong>.</p>\n<p>Você poderá fazer pesquisas por registros bibliográficos, autoridades e vocabulário pela opção <em>"Pesquisa"</em> no menu superior. Esta é a mesma <em>"Pesquisa"</em> que os leitores poderão usar ao acessar o <strong>Biblivre</strong>, sem necessidade de usuário e senha, para pesquisar por registros na Base Principal.</p>\n<p>Para cadastrar leitores, realizar empréstimos, devoluções e reservas, controlar o acesso à biblioteca e imprimir carteirinhas, use a opção <em>"Circulação"</em>, também no menu superior.</p>\n<p>Na opção <em>"Catalogação"</em>, você poderá controlar o acervo da biblioteca, catalogando obras e exemplares, e efetuar o controle de autoridades e do vocabulário. Através desta opção tambem é possível imprimir as etiquetas usadas nos exemplares, mover registros entre as bases de dados (Principal, Trabalho, Privada e Lixeira), importar e exportar registros e adicionar arquivos digitais aos registros existentes.</p>\n<p>O <strong>Biblivre</strong> também possui um sistema simples de controle do processo de aquisição, para auxiliar a compra e recebimento de publicações, através da opção <em>"Aquisição"</em>.</p>\n<p>Em <em>"Administração"</em>, você poderá trocar a senha de acesso, configurar recursos do <strong>Biblivre</strong> como campos dos formulários, traduções e tipos de usuário, cadastrar cartões de acesso, gerar relatórios e realizar a manutenção da base de dados, que inclui a geração da cópia de segurança (backup), e a reindexação da base de dados, que deve ser usada quando alguns registros não puderem ser encontrados através da pesquisa.</p>\n<p>Caso precise de mais informações sobre o <strong>Biblivre</strong>, acesse a opção <em>"Ajuda"</em> e leia o Manual do programa ou as perguntas frequentes, no <a href="http://biblivre.org.br/forum" target="_blank">Fórum</a>.</p>',
  "cataloging.labels.selected_records_plural": "{0} exemplares selecionados",
  "administration.configuration.description.general.default_language":
    "Esta configuração representa o idioma padrão para exibição do Biblivre.",
  "administration.configuration.title.general.subtitle":
    "Subtítulo da biblioteca",
  "administration.reports.user.search": "Digite o nome ou matrícula do Usuário",
  "administration.form_customization.indicator_name": "Nome do indicador",
  "administration.user_type.field.reservation_limit":
    "Limite de reservas simultâneas",
  "multi_schema.backup.schemas.title":
    "Cópia de Segurança (Backup) de Múltiplas Bibliotecas",
  "marc.bibliographic.datafield.362.subfield.z": "Fonte de informação",
  "acquisition.quotation.field.response_date": "Data de Chegada da Cotação",
  "administration.maintenance.backup.unavailable": "Backup não disponível",
  "administration.permissions.groups.admin": "Administração",
  "circulation.user_field.login": "Login",
  "marc.bibliographic.datafield.670": "Origem das informações",
  "acquisition.quotation.button.add": "Adicionar",
  "common.cancel": "Cancelar",
  "circulation.lending.user_current_lending_list":
    "Exemplares emprestados a este leitor",
  "administration.maintenance.backup.error.invalid_schema":
    "A lista de backup possui uma ou mais bibliotecas inválidas",
  "marc.bibliographic.datafield.342.subfield.d": "Escala da Longitude",
  "administration.z3950.field.port": "Porta",
  "marc.bibliographic.datafield.342.subfield.c": "Escala da Latitude",
  "marc.bibliographic.datafield.830.indicator.2.0":
    "Nenhum caractere a desprezar",
  "marc.bibliographic.datafield.830.indicator.2.1": "1 caractere a desprezar",
  "multi_schema.restore.restore_complete_backup.description":
    "Caso você deseje restaurar todo o conteúdo deste backup, use o botão abaixo. Atenção: Isso substituirá TODO o conteúdo do seu Biblivre, inclusive substituindo todas as bibliotecas existentes pelas que estão no backup. Use esta opção apenas se desejar voltar completamente no tempo, até a data do backup.",
  "circulation.lending.holding_lent_to_the_following_reader":
    "Este exemplar está emprestado para o leitor abaixo",
  "marc.bibliographic.datafield.830.indicator.2.2": "2 caracteres a desprezar",
  "marc.bibliographic.datafield.830.indicator.2.3": "3 caracteres a desprezar",
  "cataloging.bibliographic.indexing_groups.author": "Autor",
  "marc.bibliographic.datafield.830.indicator.2.4": "4 caracteres a desprezar",
  "marc.bibliographic.datafield.362.subfield.a":
    "Informação de Datas de Publicação e/ou Volume",
  "marc.bibliographic.datafield.830.indicator.2.5": "5 caracteres a desprezar",
  "administration.setup.biblivre3migration.button":
    "Importar dados do Biblivre 3",
  "marc.bibliographic.datafield.830.indicator.2.6": "6 caracteres a desprezar",
  "administration.configuration.title.logged_in_text":
    "Texto inicial para usuários logados",
  "marc.bibliographic.datafield.830.indicator.2.7": "7 caracteres a desprezar",
  "menu.help_about_library": "Sobre a Biblioteca",
  "administration.accesscards.change_status.uncancel":
    "O Cartão será recuperado e estará disponível para uso",
  "marc.bibliographic.datafield.342.subfield.b":
    "Unidade das Coordenadas ou Unidade da Distância",
  "marc.bibliographic.datafield.342.subfield.a": "Nome",
  "marc.bibliographic.datafield.680": "Nota de escopo (NE)",
  "marc.bibliographic.datafield.029.subfield.a": "Número do ISNM",
  "marc.bibliographic.datafield.685": "Nota de histórico ou glossário (GLOSS)",
  "cataloging.import.error.invalid_marc": "Falha ao ler o Registro",
  "common.form": "Formulário",
  "administration.migration.groups.cataloging_bibliographic":
    "Catálogo Bibliográfico e de Exemplares",
  "marc.bibliographic.datafield.830.indicator.2.8": "8 caracteres a desprezar",
  "marc.bibliographic.datafield.830.indicator.2.9": "9 caracteres a desprezar",
  "cataloging.bibliographic.indexing_groups.publisher": "Editora",
  "administration.setup.biblivre4restore.confirm_description":
    "Você realmente deseja restaurar este Backup?",
  "circulation.custom.user_field.phone_work": "Telefone Comercial",
  "marc.bibliographic.datafield.210": "Título Abreviado",
  "marc.bibliographic.datafield.045.indicator.1._":
    "Subcampos |b ou |c não estão presentes",
  "cataloging.import.records_found_plural": "{0} registros encontrados",
  "marc.holding.datafield.852.indicator.2._": "Nenhuma informação fornecida",
  "administration.reports.field.start_date": "Data Inicial",
  "administration.reports.select.option.searches":
    "Relatório de Total de Pesquisas por Período",
  "administration.translations.error.load":
    "Não foi possível ler o arquivo de traduções",
  "administration.accesscards.confirm_cancel_editing.1":
    "Você deseja cancelar a inclusão de Cartões de Acesso?",
  "administration.accesscards.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "circulation.lending.lending_count": "Exemplares emprestados",
  "menu.administration_password": "Troca de Senha",
  "administration.brief_customization.separators.space-dash-space":
    "Espaço - hífen - espaço",
  "administration.brief_customization.subfields_title": "Subcampos",
  "cataloging.vocabulary.confirm_delete_record_question":
    "Você realmente deseja excluir este registro de vocabulário?",
  "marc.vocabulary.datafield.360":
    "Remissiva VT (ver também) e TA (termo relacionado ou associado)",
  "administration.reports.error.generate":
    "Falha ao gerar o relatório. Verifique o preenchimento do formulário.",
  "administration.maintenance.reindex.confirm":
    "Deseja confirmar a reindexação da base?",
  "field.error.max_length": "Este campo deve possuir no máximo {0} caracteres",
  "marc.bibliographic.datafield.210.indicator.2._": "Título chave abreviado",
  "administration.permissions.repeat_password": "Repetir senha",
  "marc.bibliographic.datafield.515.subfield.a":
    "Nota de Peculiaridade na Numeração",
  "marc.holding.datafield.852.indicator.2.0": "Não numerada",
  "marc.holding.datafield.852.indicator.2.1": "Numeração primária",
  "marc.holding.datafield.852.indicator.2.2": "Numeração alternada",
  "acquisition.quotation.fieldset.title.values": "Valores",
  "marc.bibliographic.datafield.630": "Assunto - Título uniforme",
  "multi_schema.translations.page_help":
    '<p>O módulo de <strong>"Traduções"</strong> de Multi-bibliotecas funciona de forma análoga a sua versão de uma única biblioteca, porém, textos alterados por aqui serão aplicados a todas as bibliotecas do grupo, desde que estas não tenham alterado o valor original de cada tradução.</p>\n<p>Por exemplo, se você alterar a tradução da chave <strong>"menu.search"</strong> de "Pesquisa" para "Busca" pelo módulo de traduções multi-bibliotecas, todas as bibliotecas deste grupo verão a nova tradução. Porém, se um dos administradores de uma destas bibliotecas alterar, através do módulo de <strong>"Traduções"</strong> de sua biblioteca, a mesma chave para "Procurar", esta tradução interna terá prioridade, apenas para esta biblioteca.</p>\n<p>Para adicionar um novo idioma, baixe o arquivo de idioma em Português, faça a tradução dos textos e depois faça o envio do arquivo. Lembre-se que apenas os <strong>textos</strong> (depois do sinal de igual) devem ser alterados.  Não altere as chaves, ou o Biblivre 5 não conseguirá localizar o texto</p>\n<p>Exemplo: digamos que você queira alterar o texto no menu principal de <i>Pesquisa</i> para <i>Busca</i>.  Você deverá então baixar o arquivo do idioma e alterar a seguinte linha:</p>\n<p><strong>*menu.search</strong> = Pesquisa</p>\n<p>Para:</p>\n<p><strong>*menu.search</strong> = Busca</p>\n<p>E então fazer o Envio do arquivo de idiomas. O Biblivre 5 irá processar o arquivo, e alterar o texto do menu.</p>',
  "administration.accesscards.preview": "Pré visualização",
  "administration.permission.success.delete": "Login excluído com sucesso",
  "acquisition.request.field.info": "Observações",
  "circulation.lending.receipt.renews": "Renovações",
  "administration.form_customization.indicator_values": "Valores",
  "administration.accesscards.change_status.title.block": "Bloquear Cartão",
  "acquisition.order.confirm_delete_record_title.forever":
    "Excluir registro de Pedido",
  "administration.form_customization.field_name": "Nome do Campo",
  "acquisition.request.fieldset.title_info": "Dados da Obra",
  "administration.accesscards.status.cancelled": "Cancelado",
  "administration.brief_customization.aggregators_title":
    "Agregadores de subcampo",
  "administration.maintenance.backup.last_backup": "Último Backup",
  "circulation.user.button.edit": "Editar",
  "cataloging.import.upload_button": "Enviar",
  "menu.administration_configurations": "Configurações",
  "search.common.clear_simple_search": "Limpar resultados da pesquisa",
  "administration.configuration.description.general.backup_path":
    "Esta configuração representa o caminho, no servidor onde o Biblivre está instalado, para a pasta onde deverão ser guardados as cópias de segurança do Biblivre. Caso esta configuração estiver vazia, as cópias de segurança serão gravadas no diretório <strong>Biblivre</strong> dentro da pasta do usuário do sistema.<br>Recomendamos que este caminho esteja associado a algum tipo de backup automático em núvem, como os serviços <strong>Dropbox</strong>, <strong>SkyDrive</strong> ou <strong>Google Drive</strong>. Caso o Biblivre não consiga guardar os arquivos no caminho especificado, os mesmos serão guardados em um diretório temporário e poderão ficar indisponíveis com o tempo. Lembre-se, um backup é a única forma de recuperar os dados inseridos no Biblivre.",
  "administration.form_customization.subfield_autocomplete.vocabulary":
    "Vocabulário",
  "search.user.simple_term_title": "Preencha os termos da pesquisa",
  "marc.bibliographic.datafield.650": "Assunto - Tópico",
  "marc.bibliographic.datafield.651": "Assunto - Nome geográfico",
  "administration.configuration.title.general.currency": "Moeda",
  "administration.form_customization.subfield_autocomplete.": "Auto Completar",
  language_code: "pt-BR",
  "search.user.remove_item_button": "Excluir",
  "marc.bibliographic.datafield.045.indicator.1": "Tipo do período cronológico",
  "marc.bibliographic.datafield.260": "Publicação, edição. Etc.",
  "menu.administration_maintenance": "Manutenção",
  "administration.reports.field.user_late_lendings": "Empréstimos em Atraso",
  "marc.material_type.articles": "Artigo",
  "cataloging.bibliographic.indexing_groups.series": "Série",
  "cataloging.import.button.import_all": "Importar todas as páginas",
  "marc.bibliographic.datafield.041.indicator.1": "Indicação de tradução",
  "circulation.lending.daily_fine": "Multa diária",
  "cataloging.authorities.author_type": "Tipo de autor",
  "administration.maintenance.backup.description.1":
    "O Backup é um processo onde executamos a cópia de informações para salvaguardá-las em caso de algum problema no sistema. É uma cópia dos registros e informações do Biblivre. O Biblivre 5 possui 3 tipos de backup:",
  "administration.maintenance.backup.description.2":
    "O Backup completo é uma cópia de todos os dados e informações do Biblivre 5, incluindo os arquivos de mídia digital, como fotos dos usuários, arquivos digitais dos registros bibliográficos, etc.",
  "administration.maintenance.reinstall.description":
    "Use esta opção caso você queira restaurar um backup do Biblivre 5, apagar os dados da sua biblioteca ou refazer a migração do Biblivre 3. Você será enviado à tela inicial de instalação do Biblivre, onde poderá cancelar caso desista de fazer alterações.",
  "administration.migration.groups.z3950_servers": "Servidores Z39.50",
  "search.bibliographic.page_help":
    "<p>A pesquisa bibliográfica permite recuperar informações sobre os registros do acervo desta biblioteca, listando seus exemplares, campos catalográficos e arquivos digitais.</p>\n<p>A forma mais simples é usar a <strong>pesquisa simplificada</strong>, que buscará cada um dos termos digitados nos seguintes campos: <em>{0}</em>.</p>\n<p>As palavras são pesquisadas em sua forma completa, porém é possível usar o caractere asterisco (*) para buscar por palavras incompletas, de modo que a pesquisa <em>'brasil*'</em> encontre registros que contenham <em>'brasil'</em>, <em>'brasilia'</em> e <em>'brasileiro'</em>, por exemplo. Aspas duplas podem ser usadas para encontrar duas palavras em sequência, de modo que a pesquisa <em>\"meu amor\"</em> encontre registros que contenham as duas palavras juntas, mas não encontre registros com o texto <em>'meu primeiro amor'</em>.</p>\n<p>A <strong>pesquisa avançada</strong> confere um maior controle sobre os registros localizados, permitindo, por exemplo, buscar por data de catalogação ou exatamente no campo desejado.</p>",
  "acquisition.supplier.error.no_supplier_found":
    "Não foi possível encontrar nenhum fornecedor",
  "menu.circulation_reservation": "Reservas",
  "administration.reports.select.option.marc_field": "Valor do campo Marc",
  "error.no_permission": "Você não tem permissão para executar esta ação",
  "login.error.user_has_login": "Este usuário já possui um login",
  "administration.reports.field.lendings_current":
    "Total de Livros ainda emprestados",
  "administration.migration.groups.digital_media": "Mídias Digitais",
  "cataloging.bibliographic.automatic_holding.holding_volume_number":
    "Número do Volume",
  "acquisition.quotation.field.quantity": "Quantidade",
  "administration.reports.title.topographic": "Relatório Topográfico",
  "marc.bibliographic.datafield.256.subfield.a":
    "Características do arquivo de computador",
  "administration.setup.biblivre4restore.error": "Erro ao restaurar backup",
  "administration.reports.field.holding_reservation":
    "Reservas por serial do exemplar",
  "marc.bibliographic.datafield.095.subfield.a": "Área do conhecimento",
  "marc.holding.datafield.949.subfield.a": "Tombo Patrimonial",
  "circulation.user_status.inactive": "Inativo",
  "administration.maintenance.backup.description.3":
    "O Backup sem arquivos digitais é uma cópia de todos os dados e informações do Biblivre 5, <strong>excluindo</strong> os arquivos de mídia digital. Por excluir os arquivos de mídia digital, o processo tanto de backup quanto de recuperação é mais rápido, e o arquivo de backup é menor.",
  "administration.maintenance.backup.description.4":
    "O Backup somente de arquivos digitais é uma cópia de todos os arquivos de mídia digital que foram gravados no Biblivre, sem nenhum outro dado ou informação, como usuários, base catalográfica, etc.",
  "administration.setup.no_backups_found": "Nenhum backup encontrado",
  "acquisition.quotation.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este registro de cotação?",
  "cataloging.bibliographic.confirm_move_record_description_plural":
    "Você realmente deseja mover estes {0} registros?",
  "marc.authorities.datafield.111.indicator.1.2": "nome na ordem direta",
  "administration.reports.select.option.reservations": "Relatório de Reservas",
  "error.biblivre_is_locked_please_wait":
    "Este Biblivre está em manutenção. Por favor, tente novamente em alguns minutos.",
  "marc.authorities.datafield.111.indicator.1.1": "nome da jurisdição",
  "marc.authorities.datafield.111.indicator.1.0": "nome invertido",
  "menu.acquisition_supplier": "Fornecedores",
  "acquisition.order.field.delivered": "Pedido recebido",
  "administration.configuration.description.search.result_limit":
    "Esta configuração representa a quantidade máxima de resultados que serão encontrados em uma pesquisa catalográfica. Este limite é importante para evitar lentidões no Biblivre em bibliotecas que possuam uma grande quantidade de registros. Caso a quantidade de resultados da pesquisa do usuário exceda este limite, será recomendado que ele melhore os filtros da pesquisa.",
  "cataloging.import.step_1_title": "Selecionar origem dos dados da importação",
  "marc.bibliographic.datafield.490.indicator.1.1": "Título desdobrado",
  "marc.bibliographic.datafield.490.indicator.1.0": "Título não desdobrado",
  "administration.setup.biblivre4restore.description_found_backups_1":
    "Abaixo estão os backups encontrados nos documentos do seu computador. Para restaurar um destes backups, clique sobre o seu nome.",
  "marc.bibliographic.datafield.630.indicator.1.7": "7 caracteres a desprezar",
  "marc.bibliographic.datafield.630.indicator.1.8": "8 caracteres a desprezar",
  "marc.bibliographic.datafield.630.indicator.1.9": "9 caracteres a desprezar",
  "warning.change_password":
    "Você ainda não mudou a senha padrão de administrador",
  "marc.bibliographic.datafield.630.indicator.1.3": "3 caracteres a desprezar",
  "marc.bibliographic.datafield.651.subfield.z": "Subdivisão geográfico",
  "marc.bibliographic.datafield.630.indicator.1.4": "4 caracteres a desprezar",
  "circulation.access.user.search": "Usuários",
  "marc.bibliographic.datafield.630.indicator.1.5": "5 caracteres a desprezar",
  "marc.bibliographic.datafield.651.subfield.x": "Subdivisão geral",
  "marc.bibliographic.datafield.630.indicator.1.6": "6 caracteres a desprezar",
  "marc.bibliographic.datafield.651.subfield.y": "Subdivisão cronológico",
  "menu.administration_reports": "Relatórios",
  "marc.bibliographic.datafield.045.indicator.1.1": "Data - período múltiplos",
  "marc.bibliographic.datafield.045.indicator.1.2":
    "Extensão de datas - períodos",
  "marc.bibliographic.datafield.630.indicator.1.0":
    "Nenhum caractere a desprezar",
  "administration.setup.clean_install.button":
    "Iniciar como uma nova biblioteca",
  "marc.bibliographic.datafield.630.indicator.1.1": "1 caractere a desprezar",
  "marc.bibliographic.datafield.630.indicator.1.2": "2 caracteres a desprezar",
  "administration.form_customization.indicator.label_value": "Valor",
  "marc.bibliographic.datafield.045.indicator.1.0": "Data - período únicos",
  "marc.bibliographic.datafield.111.indicator.1.0": "nome invertido",
  "cataloging.tab.record.custom.field_label.authorities_400":
    "Outra forma do nome",
  "administration.permissions.items.login_change_password": "Trocar senha",
  "marc.bibliographic.datafield.111.indicator.1.1": "nome da jurisdição",
  "marc.bibliographic.datafield.111.indicator.1.2": "nome na ordem direta",
  "search.user.field": "Campo",
  "administration.reports.option.all_digits": "Todos",
  "marc.bibliographic.datafield.505.subfield.a": "Notas de conteúdo",
  "marc.bibliographic.datafield.246": "Forma Variante de Título",
  "cataloging.vocabulary.term.up": "Termo Use Para (UP)",
  "administration.form_customization.error.existing_tag":
    "Já existe um Campo com esta tag.",
  "circulation.custom.user_field.address": "Endereço",
  "circulation.lending.error.select_reader_first":
    "Para emprestar um exemplar você precisa, primeiramente, selecionar um leitor",
  "marc.bibliographic.datafield.651.subfield.a": "Nome geográfico",
  "cataloging.bibliographic.button.export_records": "Exportar registros",
  "cataloging.import.issn_already_in_database":
    "Já existe um registro com este ISSN na base de dados",
  "cataloging.tab.record.custom.field_label.authorities_411":
    "Outra forma do nome",
  "cataloging.tab.record.custom.field_label.authorities_410":
    "Outra forma do nome",
  "administration.maintenance.backup.error.duplicated_destination_schema":
    "Não é possível restaurar duas bibliotecas para um único atalho",
  "acquisition.order.field.supplier_select": "Selecione um Fornecedor",
  "marc.bibliographic.datafield.240": "Título uniforme",
  "marc.bibliographic.datafield.243": "Título Convencionado Para Arquivamento",
  "marc.bibliographic.datafield.245": "Título principal",
  "acquisition.quotation.field.info": "Observações",
  "marc.bibliographic.datafield.257": "País da entidade produtora",
  "marc.bibliographic.datafield.258": "Informação sobre material filatélico",
  "marc.material_type.thesis": "Tese",
  "cataloging.lending.error.holding_is_lent":
    "O exemplar selecionado já está emprestado",
  "cataloging.record.success.update": "Registro alterado com sucesso",
  "cataloging.vocabulary.term.te": "Termo Específico (TE)",
  "acquisition.supplier.success.save": "Fornecedor incluído com sucesso",
  "cataloging.vocabulary.term.tg": "Termo Geral (TG)",
  "acquisition.request.field.edition": "Número da edição",
  "marc.bibliographic.datafield.342.indicator.1.1":
    "Sistema de coordenada Vertical",
  "administration.form_customization.subfields": "Subcampos",
  "cataloging.import.step_2_title": "Selecionar registros para importação",
  "marc.bibliographic.datafield.342.indicator.1.0":
    "Sistema de coordenada horizontal",
  "cataloging.vocabulary.term.ta": "Termo Associado (VT / TA)",
  "common.added_to_list": "Adicionado à lista",
  "marc.bibliographic.datafield.250": "Edição",
  "cataloging.bibliographic.confirm_move_record_title": "Mover registros",
  "multi_schema.manage.new_schema.description":
    "Para criar uma nova biblioteca, preencha abaixo seu nome e um subtítulo opcional. Você também precisará de um nome reduzido para a biblioteca, chamado de atalho, que será usado no endereço Web de acesso ao Biblivre 5, permitindo diferenciar as diversas bibliotecas instaladas no sistema. Este atalho deve conter apenas letras, números e o caractere _. Para facilitar, o Biblivre 5 irá sugerir um atalho automaticamente, baseado no nome da biblioteca.",
  "acquisition.order.title.author": "Autor",
  "marc.bibliographic.datafield.255": "Dado matemático cartográfico",
  "menu.administration_z3950_servers": "Servidores Z39.50",
  "marc.bibliographic.datafield.256":
    "Características do arquivo de computador",
  "administration.reports.fieldset.user": "Pesquisa de Usuário",
  "cataloging.tab.record.custom.field_label.biblio_740": "Título analítico",
  "field.error.invalid": "Este valor não é válido para este campo",
  "marc.vocabulary.datafield.670.subfield.a": "Nota de origem do termo",
  "marc.bibliographic.datafield.245.indicator.2.9": "9 caracteres a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.8": "8 caracteres a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.7": "7 caracteres a desprezar",
  "administration.z3950.confirm_delete_record_question.forever":
    "Você realmente deseja excluir este Servidor Z39.50?",
  "marc.bibliographic.datafield.245.indicator.2.6": "6 caracteres a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.5": "5 caracteres a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.4": "4 caracteres a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.3": "3 caracteres a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.2": "2 caracteres a desprezar",
  "menu.administration_form_customization":
    "Personalização de Formulário Catalográfico",
  "marc.bibliographic.datafield.245.indicator.2.1": "1 caractere a desprezar",
  "marc.bibliographic.datafield.245.indicator.2.0":
    "Nenhum caractere a desprezar",
  "acquisition.supplier.confirm_delete_record_title.forever":
    "Excluir registro de fornecedor",
  "administration.reports.field.lendings_top": "Livros mais emprestados",
  "cataloging.tab.record.custom.field_label.biblio_730": "Título uniforme",
  "marc.bibliographic.datafield.013.subfield.b": "País",
  "login.error.same_password": "A nova senha deve ser diferente da senha atual",
  "marc.bibliographic.datafield.013.subfield.c": "Tipo",
  "marc.bibliographic.datafield.013.subfield.a": "Número",
  "administration.change_password.repeat_password": "Repita a nova senha",
  "marc.bibliographic.datafield.342.indicator.2.3": "Local planar",
  "administration.accesscards.change_status.question.cancel":
    "Deseja realmente cancelar este Cartão?",
  "marc.bibliographic.datafield.342.indicator.2.2":
    "Sistema de coordenadas em grid",
  "marc.bibliographic.datafield.342.indicator.2.1": "Projeção de mapa",
  "marc.bibliographic.datafield.342.indicator.2.0": "Geográfico",
  "warning.reindex_database": "Você precisa reindexar as bases de dados",
  "error.file_not_found": "Arquivo não encontrado",
  "marc.bibliographic.datafield.013.subfield.f": "Parte de um documento",
  "cataloging.import.upload_popup.processing": "Processando...",
  "marc.bibliographic.datafield.013.subfield.d": "Data",
  "marc.bibliographic.datafield.013.subfield.e": "Estado da patente",
  "administration.z3950.field.collection": "Coleção",
  "administration.setup.biblivre4restore.error.digital_media_only_selected":
    "O Backup selecionado contém apenas arquivos digitais. Tente novamente usando um backup completo ou parcial sem arquivos digitais",
  "marc.bibliographic.datafield.342.indicator.2.8": "Profundidade",
  "marc.bibliographic.datafield.342.indicator.2.7": "A especificar",
  "marc.bibliographic.datafield.342.indicator.2.6": "Altitude",
  "acquisition.order.field.status": "Situação",
  "marc.bibliographic.datafield.342.indicator.2.5": "Modelo geodésico",
  "marc.bibliographic.datafield.043.subfield.a": "Código de área geográfica",
  "marc.bibliographic.datafield.342.indicator.2.4": "Local",
  "administration.migration.migrate.error": "Falha ao importar os dados",
  "circulation.lending.empty_lending_list":
    "Este leitor não possui exemplares emprestados",
  "administration.z3950.error.save": "Falha ao salvar o servidor z39.50",
  "circulation.custom.user_field.phone_home": "Telefone Residencial",
  "administration.permissions.confirm_delete_record.forever":
    "Tanto o Login do Usuário quanto suas Permissões serão excluídos permanentemente do sistema e não poderão ser recuperados.",
  "marc.bibliographic.datafield.111.indicator.1": "Forma de entrada",
  "administration.translations.edit.title": "Editar traduções",
  "acquisition.request.confirm_delete_record_title.forever":
    "Excluir registro de requisição",
  "administration.user_type.field.description": "Descrição",
  "cataloging.bibliographic.button.edit": "Editar",
  "error.invalid_json":
    "O Biblivre não foi capaz de entender os dados recebidos",
  "administration.permissions.items.cataloging_bibliographic_save":
    "Salvar registro bibliográfico",
  "marc.holding.datafield.090.subfield.c": "Edição / volume",
  "marc.holding.datafield.090.subfield.d": "Número do exemplar",
  "administration.reports.field.modified": "Data Cancelamento/Alteração",
  "marc.holding.datafield.090.subfield.a": "Classificação",
  "circulation.lending.receipt.accession_number": "Tombo Patrimonial",
  "marc.holding.datafield.090.subfield.b": "Código do autor",
  "administration.brief_customization.separators.colon-space":
    "Dois pontos - espaço",
  "administration.configuration.title.general.business_days":
    "Dias de funcionamento",
  "marc.bibliographic.datafield.130.indicator.1":
    "Número de caracteres a serem desprezados na alfabetação",
  "administration.reports.field.user_status.inactive": "Inativo",
  "administration.accesscards.confirm_cancel_editing_title":
    "Cancelar inclusão de Cartões de Acesso",
  "administration.setup.biblivre4restore.title_found_backups":
    "Backups Encontrados",
  "circulation.user.users_who_have_login_access":
    "Listar apenas usuários que possuem login de acesso ao Biblivre",
  "marc.authorities.datafield.411": "Outra forma do nome",
  "label.logout": "Sair",
  "cataloging.tab.record.custom.field_label.biblio_710": "Autor secundário",
  "cataloging.tab.record.custom.field_label.biblio_711": "Autor secundário",
  "administration.reports.field.editor": "Editora",
  "menu.help_manual": "Manual",
  "administration.setup.biblivre3import.error.description":
    "Infelizmente ocorreu um erro ao importar os dados do Biblivre 3. Verifique a próxima tela pelo log de erros e, caso necessário, entre no fórum Biblivre para obter ajuda.",
  "administration.z3950.field.name": "Nome",
  "administration.setup.button.continue_to_biblivre": "Ir para o Biblivre",
  "cataloging.labels.button.select_page": "Selecionar exemplares desta página",
  "administration.configuration.description.general.multi_schema":
    "Esta configuração permite que se habilite o sistema de múltiplas bibliotecas nesta instalação do Biblivre 5.",
  "error.invalid_parameters":
    "O Biblivre não foi capaz de entender os parâmetros recebidos",
  "cataloging.tab.record.custom.field_label.biblio_300": "Descrição física",
  "marc.bibliographic.datafield.100.indicator.2": "",
  "administration.configuration.invalid_psql_path":
    "Caminho inválido. O Biblivre não será capaz de gerar e restaurar backups já que o arquivo <strong>psql</strong> não foi encontrado.",
  "marc.bibliographic.datafield.100.indicator.1": "Forma de entrada",
  "marc.authorities.datafield.111.subfield.a": "Nome do evento",
  "administration.reports.option.title": "Título",
  "circulation.users.success.delete": "Usuário excluído permanentemente",
  "cataloging.tab.record.custom.field_label.biblio_306": "Tempo de duração",
  "marc.bibliographic.datafield.111.subfield.a": "Nome do evento",
  "marc.bibliographic.datafield.111.subfield.d": "Data da realização do evento",
  "marc.bibliographic.datafield.111.subfield.c":
    "Local de realização do evento",
  "circulation.lending.receipt.author": "Autor",
  "marc.bibliographic.datafield.111.subfield.e":
    "Nome de subunidades do evento",
  "common.today": "Hoje",
  "marc.bibliographic.datafield.111.subfield.g": "Informações adicionais",
  "marc.bibliographic.datafield.111.subfield.k": "Subcabeçalhos",
  "marc.bibliographic.datafield.111.subfield.n": "Número de ordem do evento",
  "circulation.user.tabs.form": "Cadastro",
  "cataloging.bibliographic.confirm_remove_attachment":
    "Excluir arquivo digital",
  "acquisition.supplier.error.delete": "Falha ao exluir o fornecedor",
  "cataloging.holding.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "search.common.add_field": "Adicionar termo",
  "cataloging.holding.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de exemplar?",
  "administration.form_customization.confirm_delete_datafield_description":
    "Você realmente deseja excluir este campo? Esta operação é irreversível, e o campo só será apresentado na aba Marc.",
  "administration.translations.download.description":
    "Selecione abaixo o idioma que deseja baixar.",
  "marc.bibliographic.datafield.343.subfield.a":
    "Método de codificação da coordenada plana",
  "marc.material_type.map": "Mapa",
  "marc.bibliographic.datafield.343.subfield.b": "Unidade de distância plana",
  "warning.new_version":
    "Já está disponível uma atualização para o Biblivre 5<br/>Versão instalada: {0}. Versão mais recente: {1}",
  "search.distributed.author": "Autor",
  "acquisition.order.field.receipt_date": "Data do recebimento",
  "marc.bibliographic.datafield.504.subfield.a": "Notas de bibliografia",
  "administration.accesscards.add_cards": "Adicionar Cartões",
  "login.error.login_already_exists":
    "Este login já existe. Escolha outro nome",
  "circulation.lending.fine_popup.description":
    "Esta devolução está em atraso e está sujeita a pagamento de multa. Verifique abaixo as informações apresentadas e confirme se a multa será adicionada ao cadastro do usuário para ser paga futuramente (Multar), se ela foi paga no momento da devolução (Pagar) ou se ela será abonada (Abonar).",
  "multi_schema.restore.restore_partial_backup.description":
    "Para restaurar apenas algumas bibliotecas, use o formulário abaixo. Neste caso você poderá escolher quais bibliotecas serão restauradas e se elas substituirão as existentes ou se serão restauradas como novas bibliotecas. Isto é útil para duplicar bibliotecas ou verificar se o backup está correto.",
  "search.user.select_item_button": "Selecionar cadastro",
  "administration.permissions.items.administration_backup":
    "Realizar cópia de segurança da base de dados",
  "search.common.switch_to": "Trocar para",
  "circulation.user.error.invalid_photo_extension":
    "A extensão do arquivo selecionado não é válida para a foto do usuário. Use arquivos .png, .jpg, .jpeg ou .gif",
  "login.error.empty_new_password": 'O campo "nova senha" não pode ser vazio',
  "common.close": "Fechar",
  "cataloging.database.record_moved": "Registro movido para a {0}",
  "administration.reports.title.holdings": "Relatório de Tombo Patrimonial",
  "administration.setup.clean_install": "Nova Biblioteca",
  "administration.permission.success.create_login":
    "Login e permissões criados com sucesso",
  "menu.administration_access_cards": "Cartões de Acesso",
  "marc.bibliographic.datafield.342.indicator.2":
    "Dimensões de referência geospacial",
  "marc.bibliographic.datafield.342.indicator.1":
    "Dimensões de referência geospacial",
  "marc.bibliographic.datafield.240.indicator.2":
    "Número de caracteres a serem desprezados na alfabetação",
  "marc.bibliographic.datafield.240.indicator.1":
    "Gera entrada secundária na ficha",
  "menu.acquisition": "Aquisição",
  "administration.accesscards.status.any": "Qualquer",
  "circulation.user.button.cancel": "Cancelar",
  "marc.bibliographic.datafield.246.indicator.2": "Tipo de título",
  "marc.bibliographic.datafield.246.indicator.1":
    "Controle de nota/entrada secundária de título",
  "common.yes": "Sim",
  "marc.bibliographic.datafield.730.indicator.1.0":
    "Nenhum caractere a desprezar",
  "marc.bibliographic.datafield.730.indicator.1.1": "1 caractere a desprezar",
  "administration.maintenance.backup.no_backups_found":
    "Nenhum backup encontrado",
  "marc.holding.datafield.852.indicator.1": "Esquema de classificação",
  "cataloging.tab.record.custom.field_label.vocabulary_150": "Termo Específico",
  "z3950.adresses.list.no_address_found": "Nenhum Servidor Z39.50 encontrado",
  "marc.bibliographic.datafield.730.indicator.1.8": "8 caracteres a desprezar",
  "marc.bibliographic.datafield.730.indicator.1.9": "9 caracteres a desprezar",
  "marc.holding.datafield.852.indicator.2": "Tipo de ordenação",
  "marc.bibliographic.datafield.730.indicator.1.6": "6 caracteres a desprezar",
  "circulation.users.error.save": "Falha ao gravar o Usuário",
  "marc.bibliographic.datafield.730.indicator.1.7": "7 caracteres a desprezar",
  "marc.bibliographic.datafield.730.indicator.1.4": "4 caracteres a desprezar",
  "marc.bibliographic.datafield.730.indicator.1.5": "5 caracteres a desprezar",
  "marc.bibliographic.datafield.730.indicator.1.2": "2 caracteres a desprezar",
  "circulation.user.no_lendings": "Este usuário não possui empréstimos",
  "marc.bibliographic.datafield.730.indicator.1.3": "3 caracteres a desprezar",
  "marc.bibliographic.datafield.245.subfield.c":
    "Indicação de responsabilidade da obra",
  "marc.bibliographic.datafield.740.indicator.1.3": "3 caracteres a desprezar",
  "marc.bibliographic.datafield.740.indicator.1.4": "4 caracteres a desprezar",
  "marc.bibliographic.datafield.245.subfield.a": "Título principal",
  "marc.bibliographic.datafield.740.indicator.1.5": "5 caracteres a desprezar",
  "marc.bibliographic.datafield.245.subfield.b": "Títulos paralelos/subtítulos",
  "marc.bibliographic.datafield.740.indicator.1.6": "6 caracteres a desprezar",
  "marc.bibliographic.datafield.740.indicator.1.7": "7 caracteres a desprezar",
  "marc.bibliographic.datafield.740.indicator.1.8": "8 caracteres a desprezar",
  "circulation.users.success.update": "Usuário salvo com sucesso",
  "marc.bibliographic.datafield.740.indicator.1.9": "9 caracteres a desprezar",
  "circulation.user.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "marc.bibliographic.datafield.740.indicator.1.0":
    "Nenhum caractere a desprezar",
  "acquisition.request.error.delete": "Falha ao exluir a Requisição",
  "circulation.user.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste usuário?",
  "marc.bibliographic.datafield.740.indicator.1.1": "1 caractere a desprezar",
  "marc.bibliographic.datafield.740.indicator.1.2": "2 caracteres a desprezar",
  "marc.bibliographic.datafield.090.subfield.b": "Código do autor (Cutter)",
  "marc.bibliographic.datafield.090.subfield.a": "Classificação (CDD)",
  "marc.bibliographic.datafield.090.subfield.d": "Número do Exemplar",
  "marc.bibliographic.datafield.090.subfield.c": "Edição - volume",
  "marc.bibliographic.datafield.245.subfield.p":
    "Nome da parte - seção da obra",
  "marc.bibliographic.datafield.245.subfield.n":
    "Número da parte - seção da obra",
  "administration.setup.upload_popup.uploading": "Enviando arquivo...",
  "marc.holding.datafield.852.subfield.c": "Localização na estante",
  "marc.holding.datafield.852.subfield.b": "Sub-localização ou coleção",
  "search.common.search_count": "{current} / {total}",
  "marc.holding.datafield.852.subfield.a": "Localização",
  "menu.search_vocabulary": "Vocabulário",
  "administration.reports.field.created": "Data de cadastro",
  "marc.bibliographic.datafield.245.subfield.h": "Meio",
  "acquisition.supplier.field.info": "Observações",
  "administration.setup.biblivre4restore":
    "Restaurar um Backup do Biblivre 4 ou Biblivre 5",
  "marc.holding.datafield.852.subfield.e": "Endereço postal",
  "acquisition.request.field.subtitle": "Títulos paralelos/subtítulo",
  "marc.holding.datafield.852.subfield.j": "Número de controle na estante",
  "acquisition.request.field.requester": "Requerente",
  "circulation.user.returned_lendings": "Empréstimos devolvidos",
  "acquisition.request.field.id": "N&ordm; do registro",
  "administration.reports.field.unit_value": "Valor Unitário",
  "format.datetime": "dd/MM/yyyy HH:mm",
  "cataloging.holding.availability": "Disponibilidade",
  "marc.holding.datafield.852.subfield.n": "Código do País",
  "login.error.empty_login": "O campo login não pode ser vazio",
  "acquisition.supplier.field.zip_code": "CEP",
  "marc.holding.datafield.852.subfield.q": "Condição física da parte",
  "marc.holding.datafield.852.subfield.x": "Nota interna",
  "aquisition.supplier.error.supplier_not_found":
    "Não foi possível encontrar o fornecedor",
  "marc.holding.datafield.852.subfield.u": "URI",
  "administration.configurations.error.invalid":
    "O valor especificado para uma das configurações não é valido, verifique os erros abaixo",
  "marc.holding.datafield.852.subfield.z": "Nota pública",
  "acquisition.quotation.field.id": "N&ordm; do registro",
  "cataloging.import.record_will_be_ignored":
    "Este registro não será importado",
  "administration.reports.field.id": "Nro. Registro",
  "administration.permissions.items.cataloging_vocabulary_move":
    "Mover registro de vocabulário",
  "marc.bibliographic.datafield.600": "Assunto - Nome pessoal",
  "search.common.registered_between": "Cadastrado entre",
  "administration.reports.field.custom_count":
    "Relatório de contagem do campo Marc",
  "circulation.user_cards.button.print_user_cards": "Imprimir carteirinhas",
  "administration.reports.button.generate_report": "Emitir Relatório",
  "administration.permissions.items.cataloging_authorities_save":
    "Salvar registro de autoridade",
  "cataloging.bibliographic.button.select_page":
    "Selecionar registros desta página",
  "cataloging.bibliographic.button.cancel": "Cancelar",
  "cataloging.vocabulary.confirm_cancel_editing.2":
    "Todas as alterações serão perdidas",
  "cataloging.vocabulary.confirm_cancel_editing.1":
    "Você deseja cancelar a edição deste registro de vocabulário?",
  "administration.reports.select.option.topographic": "Relatório Topográfico",
  "search.common.back_to_search": "Retornar à pesquisa",
  "marc.authorities.datafield.100.subfield.a":
    "Sobrenome e/ou prenome do autor",
  "marc.material_type.computer_legible": "Arquivo de Computador",
  "marc.authorities.datafield.100.subfield.b": "Numeração que segue o prenome",
  "marc.authorities.datafield.100.subfield.c":
    "Título e outras palavras associadas ao nome",
  "circulation.user_status.blocked": "Bloqueado",
  "marc.authorities.datafield.100.subfield.d": "Datas associadas ao nome",
  "marc.bibliographic.datafield.610": "Assunto - Entidade Coletiva",
  "marc.bibliographic.datafield.611": "Assunto - Evento",
  "cataloging.tab.record.custom.field_label.biblio_310": "Peridiocidade",
  "common.loading": "Carregando",
  "administration.setup.clean_install.description":
    "Caso você não tenha ou não queira restaurar um backup, esta opção permitirá iniciar o uso do Biblivre 5 com uma base de dados vazia. Após entrar no Biblivre 5 pela primeira vez, utilize o login <strong>admin</strong> e senha <strong>abracadabra</strong> para acessar o sistema e configurar sua nova biblioteca.",
  "marc.authorities.datafield.100.subfield.q": "Forma completa do nome",
  "search.common.operator.and_not": "e não",
  "administration.accesscards.page_help":
    '<p>A rotina de Cartões de Acesso permite o cadastramento e pesquisa dos Cartões utilizados pela rotina de Controle de Acesso. Para realizar o cadastramento o Biblivre oferece duas opções:</p>\n<ul><li>Cadastrar Novo Cartão: utilize para cadastrar apenas um cartão de acesso;</li><li>Cadastrar Sequência de Cartões: utilize para cadastrar mais de um cartão de acesso, em sequência. Utilize o campo "Pré visualização" para verificar como serão as numerações dos cartões incluídos.</li></ul>\n<p>Ao acessar essa rotina, o Biblivre listará automaticamente todos os Cartões de Acesso previamente cadastrados.  Você poderá então filtrar essa lista, digitando o <em>Código</em> de um Cartão de Acesso que queira encontrar.</p>',
  "multi_schema.manage.drop_schema.confirm_title": "Excluir biblioteca",
  "multi_schema.restore.warning_overwrite":
    "Atenção: já existe uma biblioteca cadastrada com o endereço acima. Se você fizer a restauração com esta opção selecionada, o conteúdo da biblioteca existente será substituído pelo conteúdo do Backup.",
  "search.bibliographic.shelf_location": "Localização",
  "acquisition.supplier.field.vat_registration_number": "Inscrição Estadual",
  "cataloging.vocabulary.indexing_groups.tg_term": "Termo Geral (TG)",
  "administration.user_type.error.save": "Falha ao salvar o Tipo de Usuário",
  "marc.vocabulary.datafield.450.subfield.a": "Termo tópico não usado",
  "administration.reports.field.number_of_titles": "Número de Títulos",
  "multi_schema.restore.restore_partial_backup.title":
    "Restaurar bibliotecas de acordo com os critérios acima",
  "cataloging.bibliographic.button.move_records": "Mover Registros",
  "circulation.custom.user_field.phone_cel": "Celular",
  "cataloging.tabs.form": "Formulário",
  "cataloging.error.no_valid_terms":
    "A pesquisa especificada não contém termos validos",
  "administration.maintenance.backup.error.corrupted_backup_file":
    "O backup selecionado não é um arquivo válido ou está corrompido",
  "circulation.lending.days_late": "Dias de atraso",
  "circulation.lending.page_help":
    "<p>Para realizar um empréstimo você deverá selecionar o leitor para o qual o empréstimo será realizado e, em seguida, selecionar o exemplar que será emprestado. A pesquisa pelo leitor pode ser feita por nome, matrícula ou outro campo previamente cadastrado. Para encontrar o exemplar, utilize seu Tombo Patrimonial.</p><p>Devoluções podem ser feitas através do leitor selecionado ou diretamente pelo Tombo Patrimonial do exemplar que está sendo devolvido ou renovado.</p><p>O prazo para devolução é calculado de acordo com o tipo de usuário, configurado pelo menu <strong>Administração</strong> e definido durante o cadastro do leitor.</p>",
  "circulation.lending.no_holding_found": "Nenhum exemplar encontrado",
  "circulation.user_cards.selected_records_singular": "{0} usuário selecionado",
  "menu.cataloging": "Catalogação",
  "administration.permissions.employee": "Funcionário",
  "marc.bibliographic.datafield.246.indicator.1.3":
    "Não gerar nota, gerar entrada secundária de título",
  "marc.bibliographic.datafield.246.indicator.1.2":
    "Não gerar nota nem entrada secundária de título",
  "acquisition.quotation.title.author": "Autor",
  "administration.setup.biblivre3restore.button":
    "Restaurar backup selecionado",
  "acquisition.supplier.field.state": "Estado",
  "marc.bibliographic.datafield.534.subfield.a": "Notas de fac-símile",
  "administration.configuration.description.multi_schema.enabled":
    "O sistema de multi-bibliotecas já está habilitado para esta instalação do Biblivre 5. O administrador do sistema poderá desabilitar essa opção no menu de configuração de multi-bibliotecas.",
  "cataloging.import.error.invalid_file": "Arquivo inválido",
  "marc.bibliographic.datafield.246.indicator.1.1":
    "Gerar nota e entrada secundária de título",
  "marc.bibliographic.datafield.246.indicator.1.0":
    "Gerar nota, não gerar entrada secundária de título",
  "multi_schema.select_restore.library_list_inside_backup":
    "Bibliotecas neste backup",
  "administration.configuration.title.search.results_per_page":
    "Resultados por página",
  "cataloging.tab.record.custom.field_label.biblio_362":
    "Data da primeira publicação",
  "administration.reports.title.custom_count":
    "Relatório de contagem pelo campo Marc",
  "marc.vocabulary.datafield.750": "Termo tópico",
  "acquisition.quotation.confirm_delete_record.trash":
    'Ele será movido para a base de dados "lixeira"',
  "administration.translations.edit.filter":
    "Exibir apenas os campos sem tradução",
  "administration.accesscards.suffix": "Sufixo",
  "cataloging.bibliographic.no_attachments":
    "Este registro não possui arquivos digitais",
  "administration.accesscards.success.unblock":
    "Cartão desbloqueado com sucesso",
  "circulation.lending.lend_success": "Exemplar emprestado com sucesso",
  "circulation.user_reservation.page_help":
    "<p>Para realizar uma reserva, você deverá selecionar o registro que será reservado. Para encontrar o registro, realize uma pesquisa similar à pesquisa bibliográfica.</p>",
  "cataloging.import.error.no_record_found":
    "Nenhum Registro válido encontrado no arquivo",
  "administration.permissions.items.acquisition_supplier_delete":
    "Excluir registro de fornecedor",
  "marc.bibliographic.datafield.750.indicator.1.1": "Assunto primário",
  "marc.bibliographic.datafield.750.indicator.1.0": "Nenhum nível especificado",
  "search.common.operator": "Operador",
  "cataloging.labels.paper_description":
    "{paper_size} {count} etiquetas ({height} mm x {width} mm)",
  "marc.bibliographic.datafield.750.indicator.1.2": "Assunto secundário",
  "administration.change_password.description.1":
    "A troca de senha é o processo no qual um usuário pode alterar a sua senha atual por uma nova. Por questões de segurança, sugerimos que o usuário realize este procedimento periodicamente.",
  "administration.change_password.description.4":
    "Use letras maiúsculas e minúsculas; e",
  "marc.bibliographic.datafield.243.indicator.2":
    "Número de caracteres a serem desprezados na alfabetação",
  "administration.change_password.description.5":
    "Use uma quantidade de caracteres superior ao recomendado.",
  "administration.change_password.description.2":
    "A única regra para criação de senhas no Biblivre é a quantidade mínima de 3 caracteres. No entanto, sugerimos seguir as seguintes diretivas:",
  "administration.change_password.description.3":
    "Misture letras, símbolos especiais e números na sua senha",
  "marc.bibliographic.datafield.243.indicator.1":
    "Gera entrada secundária na ficha",
  "circulation.custom.user_field.id_cpf": "CPF",
  "marc.bibliographic.datafield.680.subfield.a": "Nota de escopo",
  "cataloging.tab.record.custom.field_label.vocabulary_550": "Termo Genérico",
  "administration.configuration.title.cataloging.accession_number_prefix":
    "Prefixo do tombo patrimonial",
  "administration.change_password.description.6":
    "Caso o usuário perca a sua senha, o mesmo deverá entrar em contato com o Administrador ou Bibliotecário responsável pelo Biblivre, que poderá fornecer uma nova senha.",
  "menu.multi_schema_manage": "Gerência de Bibliotecas",
  "cataloging.database.work_full": "Base de Trabalho",
};

export default translations;
