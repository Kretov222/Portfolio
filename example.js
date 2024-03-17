 // const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   formData.append('date', new Date().toLocaleDateString());
  //   // console.log(Object.fromEntries(formData)); // исправить
  //   dispatch(addAppeal(Object.fromEntries(formData)))
  // };


  {
    /* <Grid item flexDirection="column" xs={4}>
                {dataModal.map((row) => (
                  <Box key={row}>
                    <Typography sx={{ fontWeight: 'bolder' }} variant="subtitle1">
                      {row}
                    </Typography>
                  </Box>
                ))}
                </Grid> */
  }

  

//   <Box sx={style}>
//   <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//     <button onClick={onClose}>
//       <img
//         src="https://e7.pngegg.com/pngimages/154/120/png-clipart-computer-icons-closure-miscellaneous-angle.png"
//         alt=""
//         width={20}
//         height={20}
//       />
//     </button>
//   </Box>
//   <form
//     onSubmit={(e) => {
//       e.preventDefault();
//       const formData = Object.fromEntries(  
//         new FormData(e.currentTarget)
//       ) as AddDataType;
//       void dispatch(thunkAddData(formData));
//       onClose()
//     }}
//   >
    {/* <Container>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 400,
            }}
          >
            <Typography sx={{ fontWeight: 'bolder' }} variant="subtitle1">
              Дата
            </Typography>

            <Typography>{new Date().toLocaleDateString()}</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 400,
            }}
          >
            <Typography sx={{ fontWeight: 'bolder' }} variant="subtitle1">
              Автор
            </Typography>
            <TextField name="authorName" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 400,
            }}
          >
            <Typography sx={{ fontWeight: 'bolder' }} variant="subtitle1">
              Тип обращения
            </Typography>
            <Select name="type" displayEmpty >
              <MenuItem value="">
                <em>Выберите тип</em>
              </MenuItem>
              <MenuItem value="Ошибка">Ошибка</MenuItem>
              <MenuItem value="Рекомендация">Рекомендация</MenuItem>
              <MenuItem value="Замечание">Замечание</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bolder' }} variant="subtitle1">
              Описание
            </Typography>
            <TextField name="description" rows={5} multiline />
          </Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <CustomButton type="submit" color="primary">
        Отправить
      </CustomButton>
    </Container>
  </form>
</Box> */}