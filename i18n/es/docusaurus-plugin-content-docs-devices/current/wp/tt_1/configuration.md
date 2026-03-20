---
slug: /wp/tt_1/configuration
id: tt_1-configuration
sidebar_label: Configuration
title: WP - TT-1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador WP TT-1 con Plaspy, incluyendo ajustes de servidor y pasos prácticos de instalación
keywords:
  - Configuración WP TT-1
  - Instalación WP TT-1
  - TT-1 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador remolque WP
  - Configuración GPS TT-1
  - Configuración rastreo de vehículos
  - Configuración rastreo de flotas
  - Configuración rastreador GSM GPRS
  - Rastreo de activos TT-1
---

# WP - TT-1 Configuración

Esta página describe el contexto público de configuración para usar el rastreador de remolques WP TT-1 con la plataforma Plaspy. Se concentra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar un TT-1 a Plaspy, de modo que el dispositivo pueda transmitir ubicaciones y eventos a su cuenta de Plaspy. La orientación aquí utiliza los datos públicos del servidor de Plaspy y consideraciones generales del fabricante extraídas de la descripción del producto TT-1.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor; utilice esta página junto con la documentación oficial del WP TT-1 durante la configuración y las pruebas.

## Resumen de la configuración

El objetivo de la configuración es preparar el TT-1 para comunicarse de forma fiable con Plaspy, de modo que los informes de ubicación, alarmas y diagnóstico se muestren en la plataforma. Esto incluye configurar el destino del servidor en el dispositivo, el tipo de transporte y verificar que el equipo tenga conexión celular y energía suficiente para las pruebas.

- Configure el TT-1 para enviar datos al endpoint del servidor de Plaspy para que los mensajes lleguen a su cuenta.
- Seleccione y verifique el transporte (UDP o TCP) si el dispositivo requiere una elección explícita.
- Configure el host del servidor usando el dominio o la dirección IP de Plaspy y el puerto compartido usado por todos los dispositivos Plaspy.
- Guarde y aplique los ajustes en el dispositivo y realice un reinicio si es necesario para activar la nueva configuración del servidor.
- Valide la conectividad confirmando que el dispositivo informe ubicaciones y eventos en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el WP TT-1:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes compatibles UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los mensajes del dispositivo

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detectará qué protocolo está empleando el rastreador, por lo que sólo necesita apuntar el TT-1 al host y puerto correctos.

## Requisitos típicos antes de la configuración

- Una unidad TT-1 que esté alimentada y con la batería de respaldo requerida cargada.
- Una tarjeta SIM válida insertada con un plan de datos activo y cobertura GSM en la región.
- Acceso al método de configuración oficial del fabricante WP o al software que suministre el proveedor.
- Un entorno de pruebas seguro con vista despejada del cielo para la verificación inicial del GPS.
- Conocimiento del identificador de dispositivo que espera Plaspy o del proceso de registro usado por su cuenta de flota.
- Un lugar estable para montar o instalar el dispositivo para las pruebas finales después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TT-1 envía sus mensajes de ubicación y eventos al endpoint y puerto del servidor de Plaspy para que la plataforma pueda procesar y presentar los datos en paneles y reportes. Usted apunta el dispositivo al host y puerto compartidos de Plaspy y la plataforma detecta el protocolo entrante.

- El TT-1 transmite mensajes de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según la interfaz de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes con el dispositivo correcto.
- Informes de eventos como alertas de geocerca, alarmas de emergencia, estado de batería y kilometraje se envían a Plaspy cuando están habilitados en el dispositivo.
- Los modos de rastreo regulares (intervalo de tiempo, intervalo de distancia, modo inteligente) envían actualizaciones periódicas al endpoint configurado de Plaspy para mantener la visibilidad del activo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante WP para el TT-1 (comandos SMS, herramienta de configuración o la interfaz del proveedor según se suministre).
2. Ingrese el host del servidor Plaspy estableciendo d.plaspy.com o la IP 54.85.159.138 en el campo servidor/host del dispositivo.
3. Configure el puerto del servidor a 8888 (todos los dispositivos Plaspy usan el mismo puerto).
4. Elija UDP o TCP si el TT-1 requiere una selección explícita del transporte.
5. Aplique o guarde la configuración en la interfaz del dispositivo y siga cualquier indicación del equipo para confirmar los ajustes.
6. Reinicie o corte y vuelva a aplicar la energía al dispositivo si el flujo del TT-1 lo requiere para activar la nueva configuración del servidor.
7. Valide que el dispositivo informe a Plaspy comprobando los mensajes entrantes en la plataforma y confirmando las actualizaciones de posición y eventos.

## Ejemplos de comandos de configuración

El WP TT-1 puede configurarse utilizando las herramientas o el conjunto de comandos suministrados por el fabricante. Los comandos exactos varían según el firmware y el método de configuración elegido (SMS, USB o utilidad de software). Dado que aquí no se proporciona el conjunto de comandos del fabricante, siga la guía oficial de configuración del WP TT-1 para la sintaxis precisa necesaria para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888, y para seleccionar UDP o TCP. Recuerde que Plaspy detectará automáticamente el protocolo cuando lleguen los mensajes.

## Notas de configuración

- Las diferencias de firmware entre unidades TT-1 pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre revise las notas de la versión del TT-1 antes de aplicar cambios masivos.
- Si el dispositivo admite tanto UDP como TCP, pruebe ambos transportes durante las pruebas de aceptación para confirmar la entrega estable a Plaspy.
- Confirme que el plan de datos de la SIM soporte el volumen de mensajes del rastreador y que los ajustes de roaming sean correctos para despliegues transfronterizos.
- Guarde una copia de la configuración original del dispositivo antes de aplicar los ajustes de Plaspy para poder revertir si es necesario.
- Use una prueba con cielo abierto para verificar la recepción GPS y que las actualizaciones de ubicación lleguen a d.plaspy.com en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Configurar el WP TT-1 para reportar a Plaspy ofrece una forma práctica de centralizar los datos de rastreo de remolques y activos en una sola plataforma para monitoreo, alertas y reportes. Los múltiples modos de rastreo y el reporte de eventos del TT-1 se complementan bien con la detección automática de protocolos de Plaspy y su endpoint de servidor compartido, lo que simplifica la integración y reduce la carga de configuración por dispositivo.

Learn more about Plaspy and platform features at https://www.plaspy.com. Manufacturer configuration methods and firmware behavior can change over time, so verify the latest device specific setup details on the WP site http://www.wondeproud.com/ before performing large scale deployments.
