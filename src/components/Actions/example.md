<Actions
  type='section'
  style='minimal'
  visible={[
    {
      title: 'Create user(s)',
      icon: 'user',
      iconOnly: true,
      onClick: handleCreateUsers,
      color: 'accent'
    },
    {
      title: 'Edit user(s)',
      icon: 'edit',
      iconOnly: true,
      onClick: handleEditUsers
    }
  ]}
  more={[
    {
      title: 'Export users',
      icon: 'export',
      onClick: handleExportUsers
    },
    {
      title: 'Import users',
      icon: 'export',
      onClick: handleImportUsers
    },
    {
      title: 'Delete user(s)',
      icon: 'trash',
      onClick: handleDeleteUsers,
      color: 'danger'
    }
  ]}
/>