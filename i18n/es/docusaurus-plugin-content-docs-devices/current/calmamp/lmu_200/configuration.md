---
slug: /calmamp/lmu_200/configuration
id: lmu_200-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para rastreadores CalmAmp LMU 200 compatibles con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración CalmAmp LMU 200
  - Configuración LMU 200
  - Configuración CalmAmp Plaspy
  - Configuración SMS LMU 200
  - Configuración servidor Plaspy
  - Instalación rastreador GPS LMU 200
  - Guía configuración rastreador CalmAmp
  - Ajustes APN LMU 200
  - Configuración seguimiento vehículo CalmAmp
  - Integración dispositivo Plaspy
---

# CalmAmp - Configuración del LMU-200

Esta página documenta el contexto público de configuración para usar el rastreador CalmAmp LMU-200 con Plaspy. Se centra en los ajustes compartidos del servidor y en los pasos prácticos públicos para preparar el dispositivo para que se comunique con la plataforma Plaspy. Cuando aplique, se incluyen ejemplos de comandos SMS extraídos de contenido de configuración público para ilustrar cómo se aplican los ajustes.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y pasos aquí como orientación pública y práctica, no como sustituto de la documentación oficial más reciente de CalAmp.

## Resumen de la configuración

El objetivo de este proceso de configuración es preparar el LMU-200 para enviar datos de ubicación y telemetría a Plaspy, validar la conectividad y hacer que la unidad sea visible en su cuenta de Plaspy. El LMU-200 puede configurarse mediante comandos SMS o con las herramientas del fabricante cuando estén disponibles; los comandos públicos siguientes muestran un flujo por SMS para establecer APN y parámetros de servidor.

- Configure el APN del dispositivo y las credenciales de APN opcionales para que el rastreador use una conexión de datos para reportar.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los mensajes del dispositivo lleguen a la plataforma.
- Confirme el puerto y el transporte del servidor y reinicie la unidad para que los nuevos ajustes surtan efecto.
- Verifique la configuración y la conectividad para que el dispositivo aparezca y reporte correctamente en Plaspy.
- Use la detección automática de protocolo de Plaspy para evitar la selección manual del protocolo cuando sea posible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma gestiona la detección de protocolos, por lo que una única combinación de servidor y puerto suele ser suficiente para la integración.

## Requisitos habituales antes de la configuración

- Un LMU-200 alimentado y accesible para la configuración inicial.
- Una SIM con datos activa en el dispositivo cuando se requieran ajustes de APN para conectividad de datos.
- Capacidad para enviar SMS o acceso a la herramienta oficial de configuración de CalAmp según su flujo de trabajo de instalación.
- El MID o identificador del dispositivo tal como lo devuelve la unidad cuando se consulta (se usa en los flujos de comandos SMS).
- Cobertura en una red celular compatible para que la unidad establezca una sesión de datos.
- Acceso administrativo a su cuenta Plaspy o al proceso de incorporación para confirmar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el LMU-200 envía ubicación y telemetría del dispositivo al endpoint del servicio Plaspy para que el equipo sea visible y gestionable desde la plataforma. Plaspy recibe los mensajes entrantes del dispositivo en su servidor y puerto compartidos, aplica detección de protocolo y pone los datos a disposición para seguimiento, alertas e informes.

- El rastreador se configura para apuntar al dominio o IP del servidor de Plaspy para que los paquetes salientes vayan a Plaspy.
- Los mensajes se envían al puerto 8888, que es el puerto común que Plaspy utiliza para todos los dispositivos compatibles.
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que en la mayoría de los casos no es necesario mapear manualmente el protocolo.
- Un reporte exitoso habilita actualizaciones de ubicación e informes del estado del dispositivo visibles en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de CalAmp, o prepárese para enviar comandos SMS de configuración según la guía del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según las necesidades de su instalación.
5. Configure el APN y las credenciales del APN necesarias para que el dispositivo obtenga una conexión de datos.
6. Aplique o guarde la configuración y luego reinicie o reinicie la unidad si es necesario para activar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del dispositivo y los mensajes entrantes en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El LMU-200 puede configurarse mediante comandos SMS. Los siguientes comandos públicos se presentan en el orden mostrado en el contenido disponible públicamente. Reemplace los marcadores por los valores apropiados y use el MID o identificador del dispositivo cuando se requiera.

Notas:
- El ID del dispositivo para comandos SMS es el MID de 10 dígitos que devuelve el comando !R0.
- Marcadores: {{apn}} es el APN de su operador, {{apnu}} es el nombre de usuario del APN si se requiere, y {{apnp}} es la contraseña del APN si se requiere.
- El comando de reinicio está incluido y debe usarse cuando su flujo de instalación lo requiera.

1. Establecer el APN del operador
```
!RP,2306,0,{{apn}}
```

2. Establecer el usuario del APN del operador (usar solo si su APN requiere un usuario)
```
!RP,2314,0,{{apnu}}
```

3. Establecer la contraseña del APN del operador (usar solo si su APN requiere una contraseña)
```
!RP,2315,0,{{apnp}}
```

4. Establecer el servidor GPRS a Plaspy por IP
```
!RP,2319,0,54.85.159.138
```

5. Establecer el puerto del servidor al puerto de Plaspy
```
!RP,769,0,8888
```

6. Reiniciar el rastreador para aplicar cambios (opcional o según se requiera)
```
!R3,70,0
```

7. Comprobar la configuración actual
```
!RO
```

Use estos comandos en el orden mostrado cuando el orden sea importante. Si su firmware o herramienta de instalación usa una sintaxis de comandos diferente, siga las herramientas oficiales de CalAmp.

## Notas de configuración

- La configuración vía SMS está documentada públicamente aquí; sin embargo, algunas instalaciones utilizan herramientas de gestión de CalAmp o actualizaciones OTA para aprovisionamiento masivo.
- Las revisiones de firmware o hardware pueden cambiar los números de comando o el comportamiento. Confirme la sintaxis de los comandos para su nivel de firmware antes de realizar una configuración masiva.
- Elija UDP o TCP según los requisitos de estabilidad de la instalación y cualquier recomendación de su operador o del equipo de integración.
- Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos con los valores correctos para su tarjeta SIM y operador.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolos, por lo que normalmente no necesita especificar un mapeo de protocolo en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el LMU-200 con Plaspy ofrece una forma sencilla de centralizar datos de ubicación y del dispositivo en una única plataforma de gestión de flotas. Los ajustes de servidor compartidos y la detección automática de protocolo en Plaspy reducen la necesidad de variar servidores por dispositivo, simplificando el despliegue en flotas mixtas y ayudando a las organizaciones a mantener visibilidad y control operativo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración más actuales, detalles de firmware y orientación del fabricante, verifique la información más reciente en el sitio web de CalAmp http://www.calamp.com/ ya que los pasos de configuración y el comportamiento de los comandos pueden cambiar con el tiempo.
