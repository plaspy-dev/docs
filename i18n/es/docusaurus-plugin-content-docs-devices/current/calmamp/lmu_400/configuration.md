---
slug: /calmamp/lmu_400/configuration
id: lmu_400-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-400 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CalmAmp LMU-400 con Plaspy, incluyendo ajustes de servidor y comandos SMS
keywords:
  - Configuración CalmAmp LMU-400
  - Configuración LMU-400 Plaspy
  - Configuración rastreador CalmAmp
  - Configuración SMS LMU-400
  - Configuración seguimiento vehicular
  - Configuración rastreador GPS
  - Ajustes servidor Plaspy
  - Configuración APN LMU-400
  - Configuración gestión de flotas
  - Guía instalación LMU-400
---

# CalmAmp - Configuración del LMU-400

Esta página documenta el contexto público de configuración para usar el rastreador CalmAmp LMU-400 con Plaspy. Se centra en los pasos y ajustes prácticos y disponibles públicamente necesarios para apuntar el dispositivo a Plaspy, de modo que la unidad pueda reportar ubicación y estado a la plataforma. Cuando procede, se muestran comandos SMS del fabricante como ejemplos para ayudar a configurar el APN, la dirección del servidor y el puerto.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El LMU-400 admite configuración por SMS y también flujos de aprovisionamiento OTA de CalmAmp, así que siga el método que corresponda a la provisión y capacidades de firmware de su dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el LMU-400 para comunicarse de forma fiable con Plaspy y validar que el dispositivo sea visible en la plataforma. Usando los comandos públicos o las herramientas del fabricante usted configurará el acceso de red (APN), apuntará el dispositivo al servidor de Plaspy y verificará el reporte.

- Configurar los ajustes de datos celulares y el APN para que el dispositivo pueda alcanzar Plaspy
- Establecer el endpoint del servidor Plaspy y el puerto usado por todos los dispositivos Plaspy
- Elegir el transporte (UDP o TCP) si el firmware del dispositivo lo requiere
- Reiniciar o aplicar los ajustes para que los cambios surtan efecto
- Verificar los ajustes y confirmar que el dispositivo aparece y reporta en Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar un LMU-400 para la plataforma Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que solo necesita establecer el puerto 8888.

## Requisitos previos típicos

- Una SIM activa con plan de datos y los detalles correctos del APN proporcionados por el operador celular
- Alimentación al LMU-400 y el cableado de instalación preferido completado
- Acceso al método de configuración CalmAmp para el dispositivo (comandos SMS, PULS OTA o herramienta del fabricante)
- El MID o ID del dispositivo (obtenible mediante el comando de verificación del LMU-400) para confirmar la unidad que está configurando
- Conocimiento de si su firmware requiere seleccionar transporte UDP o TCP
- Una cuenta Plaspy o información de incorporación para confirmar que el dispositivo aparece en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

El LMU-400 se configura para enviar sus mensajes de ubicación y estado al endpoint compartido del servidor Plaspy en el puerto 8888. Plaspy recibe conexiones entrantes en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo apropiado, permitiendo que convivan diferentes protocolos de rastreadores.

- El rastreador usa datos celulares para alcanzar el servidor Plaspy configurado
- Los eventos del dispositivo y los datos de posición se envían a d.plaspy.com o a la dirección IP indicada
- Plaspy identifica y decodifica el protocolo del rastreador automáticamente al conectarse
- La plataforma ofrece visibilidad y monitoreo de eventos una vez que el dispositivo está reportando
- La confirmación del reporte exitoso se realiza comprobando la presencia del dispositivo en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración CalmAmp para su LMU-400 (comandos SMS, PULS OTA o herramientas CalmAmp).
2. Ingrese el servidor Plaspy como d.plaspy.com o como la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (todos los dispositivos Plaspy usan este mismo puerto).
4. Elija UDP o TCP como transporte si el LMU-400 requiere una selección explícita.
5. Aplique o guarde los cambios de configuración mediante la herramienta del fabricante o envíe los comandos SMS.
6. Reinicie o haga un reboot del dispositivo si es necesario para aplicar los ajustes.
7. Valide que el LMU-400 está reportando a Plaspy y aparece en la plataforma.

## Ejemplos de comandos de configuración

Los comandos SMS públicos del CalmAmp LMU-400 pueden usarse para establecer APN, servidor, puerto y reiniciar la unidad. El ID de la unidad referenciado en los comandos SMS es el MID, un identificador de 10 dígitos que devuelve el comando !R0. Conserve los marcadores de posición al introducir los comandos.

- Obtener el MID de la unidad (se usa como ID en comandos posteriores)
```
!R0
```

- Establecer el APN del operador (reemplazar [apn] por el APN de su operador)
```
!RP,2306,0,[apn]
```

- Establecer el usuario del APN si es necesario (reemplazar [apnu] por el usuario APN)
```
!RP,2314,0,[apnu]
```

- Establecer la contraseña del APN si es necesario (reemplazar [apnp] por la contraseña APN)
```
!RP,2315,0,[apnp]
```

- Establecer el servidor GPRS a la dirección IP de Plaspy
```
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor al puerto 8888 de Plaspy
```
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los ajustes (recomendado después de la configuración)
```
!R3,70,0
```
Etiqueta: Normalmente se requiere reiniciar para aplicar los cambios; considérelo como el paso final tras guardar la configuración.

- Comprobar los ajustes actuales en el dispositivo
```
!RO
```

Notas sobre los marcadores de posición:
- [apn] — la cadena APN del operador celular
- [apnu] — usuario APN si el operador requiere autenticación
- [apnp] — contraseña APN si el operador requiere autenticación

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la disponibilidad y el comportamiento de los comandos; confirme los comandos según el firmware instalado en su dispositivo.
- El LMU-400 soporta configuración vía SMS como se muestra y también soporta aprovisionamiento PULS OTA de CalmAmp; utilice el método apropiado para su despliegue.
- Si la interfaz del dispositivo requiere elegir transporte, pruebe UDP o TCP según la preferencia del instalador; Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta.
- Todos los dispositivos Plaspy usan el puerto 8888, por lo que establecer el puerto correcto es un paso clave para la conectividad con la plataforma.
- Mantenga las credenciales del APN seguras y verifique los requisitos del operador antes de desplegar dispositivos en campo.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-400 para que reporte a Plaspy proporciona una forma directa de obtener visibilidad del vehículo y monitoreo operativo. Usar el endpoint y puerto compartidos de Plaspy simplifica la incorporación de flotas y permite que la plataforma identifique automáticamente el protocolo del rastreador, reduciendo la complejidad de configuración en despliegues con dispositivos mixtos.

Para saber más sobre Plaspy y cómo soporta rastreadores como el LMU-400, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y detalles del fabricante, verifique la documentación en el sitio oficial de CalmAmp http://www.calamp.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
