import {View, Text, Button, TextInput} from "react-native"
import {useForm, Controller } from 'react-hook-form'
import { Schema } from './Validate'
import { yupResolver } from '@hookform/resolvers/yup'


import { styles } from './Style'

export const ValidarCampos = () => {

  const {control, handleSubmit, formState: {errors} }= useForm({
    resolver: yupResolver(Schema)
  })

  const handleFunction = (data) => {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text>Campos:</Text>
     
        
      <Controller 
        control={control}
        name="username"
        render={({field: {onChange, onBlur, value}}) => (     

          <TextInput 
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={[
                    styles.input,
                   { borderWidth: errors.username && 1,
                     borderColor: errors.username && '#ff3777'  
                  }
                  ]}
            placeholder="Username"      
       />
      )}
      />
     {errors.username && <Text>{errors.username?.message}</Text>}
    
      <Controller 
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}})=> (     

          <TextInput 
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={[
              styles.input,
              { borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff3777'  
             }
            
            ]}
            placeholder="E-mail"      
        />
      )}
      />

    {errors.email && <Text>{errors.email?.message}</Text>}

      <Controller 
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}})=> (     

          <TextInput 
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={[
              styles.input,
              { borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff3777'  
             }            
            ]}
            placeholder="Password"    
            secureTextEntry={true}  
       />
      )}
      />
      {errors.password && <Text>{errors.password?.message}</Text>}

      <Button 
      title="ENVIAR"
      onPress={handleSubmit(handleFunction)}
    />
    
    </View>
  )
}
