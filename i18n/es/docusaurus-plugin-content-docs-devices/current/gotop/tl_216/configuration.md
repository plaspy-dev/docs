---
slug: /gotop/tl_216/configuration
id: tl_216-configuration
sidebar_label: Configuration
title: GOTOP - TL-216 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del GOTOP TL-216 para Plaspy con ajustes de servidor transporte y pasos de validación para rastreo en tiempo real
keywords:
  - Configuración GOTOP TL-216
  - Instalación GOTOP TL-216
  - TL-216 Plaspy
  - configuración de rastreador GOTOP
  - Configuración de servidor TL-216
  - Configuración rastreador GPS TL-216
  - Configuración software de rastreo GOTOP
  - Configuración plataforma TL-216
  - Configuración rastreador Plaspy
  - rastreo de activos vehiculares TL-216
---

# GOTOP - TL-216 Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador GOTOP TL-216 con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy y los pasos generales para direccionar un TL-216 a Plaspy para reportes en tiempo real y periódicos. La guía se enfoca en información práctica y pública de configuración, no en herramientas propietarias del fabricante ni en flujos de trabajo de cuentas privadas.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento para preparar el TL-216 para conectividad con Plaspy y consulte la documentación de GOTOP para comandos o opciones específicas del dispositivo.

## Resumen de configuración

El objetivo de configurar un GOTOP TL-216 para Plaspy es garantizar que el rastreador envíe datos de ubicación y alertas al punto final público del servidor Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. El TL-216 soporta el envío de ubicación vía GSM GPRS y también puede proporcionar alertas por SMS según la configuración.

- Definir la dirección del servidor y el transporte para que el TL-216 pueda comunicarse con Plaspy
- Configurar elementos de red como el APN y verificar la SIM para habilitar datos GPRS
- Seleccionar el modo de transporte correcto y usar el puerto estándar de Plaspy para habilitar conectividad
- Validar que el rastreador reporte posiciones para que aparezcan en Plaspy
- Probar geocercas y alertas de batería baja para confirmar visibilidad y notificaciones en la plataforma

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GOTOP TL-216. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to select a specific protocol in the platform

## Requisitos típicos antes de la configuración

- Un TL-216 con carga de batería y una tarjeta SIM activa con plan de datos habilitado para GPRS si piensa usar reportes por GPRS
- Acceso al método de configuración GOTOP para su TL-216, por ejemplo la app del fabricante, una herramienta web o la interfaz de comandos por SMS
- Conocimiento de los ajustes APN requeridos por el operador de la SIM si se usa GPRS
- Una cuenta en Plaspy y el flujo de registro de dispositivos disponible en su instancia de Plaspy para la validación final
- Herramientas básicas para reiniciar o ciclar la alimentación del rastreador después de cambiar ajustes
- Un dispositivo de prueba como un smartphone con Google Maps para verificar enlaces de mapas por SMS y confirmar coordenadas reportadas

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para reportes por GPRS, el TL-216 envía mensajes de posición y alarma al punto final compartido de Plaspy en el puerto especificado. Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador para que los mensajes se analicen y muestren en la plataforma. Si el equipo no obtiene una fijación GPS, puede enviar la última ubicación conocida o almacenar registros hasta que se restablezca la conectividad.

- El TL-216 se configura para reportar al endpoint de Plaspy en d.plaspy.com o la dirección IP equivalente
- Los datos se envían al puerto 8888 usando UDP o TCP, según la configuración del rastreador
- Actualizaciones de posición, eventos de geocerca y alertas de batería baja se transmiten a Plaspy para su visualización
- Si GPRS no está disponible, el TL-216 puede usar SMS para alertas directas a números autorizados según la configuración del dispositivo
- Los registros almacenados se cargan cuando el equipo recupera la conectividad de red

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del GOTOP TL-216 para su unidad, como la app del fabricante, la herramienta web o la interfaz de comandos por SMS.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o, si se requiere, la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo exige elegir uno.
5. Configure los elementos de red necesarios, como el APN de la SIM, para que el equipo pueda usar datos GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario para que los cambios entren en vigor.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad del equipo en su cuenta Plaspy y verificando las actualizaciones de ubicación y alarmas recibidas.

## Ejemplos de comandos de configuración

Esta página de configuración modelo no incluye comandos propietarios del fabricante. Los dispositivos GOTOP suelen configurarse mediante la app del fabricante, una herramienta web o cadenas de comandos SMS según el firmware. Los comandos exactos y la sintaxis pueden variar por la revisión de firmware y la herramienta del proveedor, por lo que debe consultar la documentación oficial de GOTOP o el manual del dispositivo para conocer el conjunto preciso de comandos para introducir d.plaspy.com o 54.85.159.138 y el puerto 8888 y para seleccionar UDP o TCP.

Si dispone de comandos SMS proporcionados por GOTOP o de una tabla de configuración del fabricante, aplique los mismos valores de servidor y puerto que se muestran arriba y siga el orden que recomiende GOTOP para aplicar ajustes y reiniciar el dispositivo.

## Notas de configuración

- Las revisiones de firmware y las variantes regionales de hardware pueden cambiar las opciones de configuración disponibles y la sintaxis de comandos SMS; siempre verifique con el manual del usuario del TL-216 correspondiente a su revisión de dispositivo
- El TL-216 admite tanto reportes por GPRS como alertas por SMS; normalmente se requieren ajustes de APN y GPRS para el reporte de datos a Plaspy
- Elija UDP o TCP según la preferencia del instalador o la compatibilidad del dispositivo; Plaspy aceptará cualquiera en el puerto compartido
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, no es necesario configurar el mapeo de protocolos dentro de la plataforma
- Si el dispositivo almacena datos mientras está fuera de línea, valide que los registros almacenados se suben cuando se restaura la conectividad

## Por qué usar Plaspy con esta configuración

Usar el GOTOP TL-216 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar ubicaciones, eventos de geocerca y alertas de batería desde rastreadores portátiles en una vista única de gestión de flotas. La forma portátil del TL-216, combinada con la compatibilidad del servidor Plaspy, ayuda a los equipos a supervisar activos y recibir alertas oportunas sin gestionar servidores personalizados.

Para conocer más sobre Plaspy visite https://www.plaspy.com y revise la documentación del GOTOP TL-216 en https://www.gotop.cc/ . Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe verificar los detalles más recientes del dispositivo en el sitio oficial de GOTOP.
