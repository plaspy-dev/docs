---
slug: /queclink/gb130mg/configuration
id: gb130mg-configuration
sidebar_label: Configuration
title: QuecLink - GB130MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GB130MG con Plaspy, incluye ajustes de servidor necesarios y ejemplos de comandos SMS
keywords:
  - Configuración QuecLink GB130MG
  - Instalación QuecLink GB130MG
  - QuecLink GB130MG Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador GB130MG
  - Configuración rastreador GPS
  - Rastreador vehicular Plaspy
  - Configuración telemática de flotas
  - Guía rastreador QuecLink
  - Configuración SMS GB130MG
---

# QuecLink - Configuración del GB130MG

Esta página describe el contexto público de configuración para usar el QuecLink GB130MG con Plaspy. Explica los valores de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, muestra ejemplos de comandos SMS publicados por QuecLink y detalla los pasos prácticos para preparar el rastreador y que reporte en la plataforma Plaspy.

Plaspy utiliza el mismo puerto de servidor y los mismos parámetros de endpoint compartido entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de QuecLink y las herramientas correspondientes para su firmware.

## Resumen de configuración

El objetivo de configurar un GB130MG para Plaspy es dirigir el dispositivo al endpoint de servidor de Plaspy, asegurarse de que la configuración por datos móviles o por SMS funcione y confirmar que el equipo aparezca en Plaspy para monitoreo y alertas. Los comandos de ejemplo a continuación reflejan un flujo común de configuración por SMS publicado para el GB130MG.

- Apuntar el rastreador al dominio o IP del servidor Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN correcto y los parámetros de GPRS para que el rastreador se conecte por celular.
- Opcionalmente restaurar o iniciar desde valores de fábrica al preparar un equipo para despliegue en flota.
- Definir intervalos de reporte y entradas de alarma para que Plaspy reciba actualizaciones y eventos oportunos.
- Validar la conectividad y que el dispositivo sea visible en Plaspy tras la configuración y el reinicio.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el dispositivo según el transporte que requiera
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de configurar

- Un GB130MG con alimentación y acceso a su interfaz de configuración o la capacidad de enviar comandos por SMS
- Una SIM celular válida con el APN configurado que permita conexión de datos si usará GPRS/LTE
- La contraseña por defecto del dispositivo si es requerida por los comandos SMS o herramientas del fabricante (en los ejemplos se usa queclink como valor por defecto)
- Acceso al método oficial de configuración de QuecLink, como SMS, herramienta web o software del proveedor
- Un entorno de pruebas o una cuenta de staging en Plaspy para validar el reporte del dispositivo antes de un despliegue masivo

## Cómo se conecta este rastreador a Plaspy

El GB130MG envía posición y telemetría de eventos a Plaspy dirigiendo su salida GPRS o TCP/UDP al endpoint compartido de Plaspy. Una vez que el dominio o IP y el puerto del servidor estén configurados en el dispositivo, Plaspy recibirá reportes periódicos y notificaciones de eventos para seguimiento en tiempo real e histórico.

- El dispositivo se configura para enviar GNSS y telemetría al dominio d.plaspy.com o directamente a 54.85.159.138
- Todos los dispositivos usan el puerto 8888 en Plaspy y la plataforma detecta automáticamente el protocolo del rastreador
- Los intervalos de reporte y las entradas de alarma determinan la frecuencia con la que Plaspy recibe actualizaciones y eventos
- Plaspy procesa los datos para mapas en vivo, alertas e informes históricos para que los operadores puedan monitorear los vehículos
- Si un dispositivo acepta tanto dominio como IP, puede usar cualquiera de los dos; Plaspy los acepta ambos

## Flujo típico de configuración

1. Acceda al método de configuración oficial de QuecLink o al software para su GB130MG, o prepárese para enviar comandos SMS si está soportado.
2. Ingrese el endpoint del servidor Plaspy, ya sea el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en el dispositivo a 8888.
4. Seleccione UDP o TCP en el dispositivo si es necesario elegir transporte.
5. Configure el APN y otros parámetros GSM según lo requiera su operador usando el método del fabricante o comandos SMS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método o el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta de la plataforma antes del despliegue completo.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS son extraídos del contenido público de configuración de QuecLink para el GB130MG. Se muestran en el orden proporcionado y emplean la contraseña de ejemplo queclink, indicada como valor por defecto en las instrucciones públicas. Si su contraseña difiere, reemplace queclink por la contraseña real. Los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} deben sustituirse por los valores del APN de su operador.

1. Paso inicial opcional Restaurar ajustes de fábrica (usar solo cuando corresponda)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = nombre del APN del operador
- {{apnu}} = usuario del APN (si se requiere)
- {{apnp}} = contraseña del APN (si se requiere)

4. Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer intervalo de actualización a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación de botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre estos comandos
- Los comandos están basados en SMS según la muestra pública; asegúrese de que la configuración por SMS esté habilitada y que el dispositivo acepte comandos SMS en su región de despliegue.
- Reemplace la contraseña de ejemplo queclink si su unidad utiliza una contraseña diferente o ya está configurada con otra.
- El comando de servidor incluye tanto d.plaspy.com como 54.85.159.138 y referencia el puerto 8888, que es el puerto que Plaspy usa para todos los dispositivos.

## Observaciones de configuración

- Diferencias de firmware y herramientas: El firmware de QuecLink o las utilidades del proveedor pueden variar el formato y el comportamiento de los comandos; confirme siempre con las notas de firmware de su dispositivo.
- SMS versus configuración por software: El ejemplo público del GB130MG usa comandos SMS; métodos alternativos como USB, herramientas web o software del proveedor también pueden estar disponibles según las herramientas del instalador.
- TCP versus UDP: Elija el transporte que requiera su red local y el firmware del dispositivo; Plaspy acepta ambos y maneja el protocolo automáticamente en su lado.
- Precaución con la contraseña por defecto: El ejemplo público usa queclink como contraseña; establezca una contraseña segura cuando sea posible después del aprovisionamiento inicial.
- Consistencia del puerto Plaspy: Plaspy utiliza el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que configurar el mismo puerto facilita el despliegue en flota.

## Por qué usar Plaspy con esta configuración

Configurar el GB130MG para reportar a Plaspy ofrece a los operadores un endpoint consistente para recibir telemetría GNSS y de sensores de alta fidelidad en toda la flota. Con los ajustes de servidor compartidos y la detección automática de protocolo, los equipos pueden estandarizar despliegues, reducir diferencias por dispositivo y lograr que los equipos reporten rápidamente en mapas, alertas y análisis.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de QuecLink https://www.queclink.com/ ya que las características y los pasos de configuración pueden cambiar con el tiempo.
