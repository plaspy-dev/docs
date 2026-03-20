---
slug: /autofon/e_maiak_ip/configuration
id: e_maiak_ip-configuration
sidebar_label: Configuration
title: AutoFon - E-Маяк IP Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador AutoFon E‑Маяк IP con los parámetros del servidor Plaspy y pasos prácticos de instalación
keywords:
  - Configuración AutoFon E‑Маяк IP
  - Instalación AutoFon E‑Маяк IP
  - Integración E‑Маяк IP con Plaspy
  - Configuración del rastreador AutoFon
  - Configurar rastreo de vehículos
  - Configuración GPS tracker para Plaspy
  - Parámetros de servidor E‑Маяк IP
  - Rastreador para gestión de flotas
  - Configuración de rastreo de activos
  - Guía de configuración AutoFon
---

# AutoFon - Configuración de E‑Маяк IP

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon E‑Маяк IP con la plataforma Plaspy. Se centra en los ajustes de servidor y el flujo práctico necesario para que el E‑Маяк IP envíe posiciones, alarmas y telemetría a Plaspy, ya sea mediante reenvío de SMS o mediante mensajes de protocolo cuando esté habilitado GPRS. Use esta guía junto con la documentación del fabricante para comandos específicos del dispositivo y el comportamiento según la versión de firmware.

Plaspy utiliza ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando este comunica con el servidor de Plaspy. Los pasos exactos en el lado del fabricante para el E‑Маяк IP pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice, así que siga las instrucciones del proveedor al aplicar estos valores públicos de servidor.

## Resumen de la configuración

Esta configuración prepara el E‑Маяк IP para comunicarse de forma fiable con Plaspy, de modo que las actualizaciones de posición, alarmas y telemetría aparezcan en la plataforma. El objetivo es que el dispositivo informe al endpoint del servidor Plaspy y que pueda confirmarse que el equipo está visible y reportando correctamente.

- Configure el rastreador para enviar mensajes de protocolo o reenviar SMS al endpoint de Plaspy.
- Ingrese la dirección y el puerto del servidor compartido de Plaspy que se usan para todos los dispositivos compatibles.
- Seleccione UDP o TCP en el rastreador si la interfaz de configuración lo solicita.
- Guarde y aplique los parámetros, luego verifique que el dispositivo envíe datos en vivo y alarmas a Plaspy.
- Confirme la recepción de mensajes de latido y alarmas para validar la conectividad y la telemetría de batería.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para reportes y conexiones de protocolo
- IP del servidor 54.85.159.138 como endpoint alternativo para configuración de dispositivos
- Puerto 8888 usado por Plaspy para todos los dispositivos compatibles
- Soporte de transporte: configure el dispositivo para usar UDP o TCP en el puerto 8888 si se le solicita
- Plaspy realiza detección automática del protocolo una vez que el dispositivo reporta al servidor

## Requisitos típicos antes de la configuración

- Un E‑Маяк IP instalado y con batería o alimentación externa según las indicaciones del fabricante
- Una tarjeta SIM activa en el equipo con servicio de SMS y/o datos según el método de reporte elegido
- Acceso al método oficial de configuración AutoFon, como comandos SMS, software del proveedor o herramientas de instalador
- Números telefónicos autorizados y PINs conocidos que el dispositivo pueda requerir para configuración remota
- Cobertura GNSS y celular razonable en la ubicación de la instalación para el primer reporte
- Una cuenta en Plaspy o el proceso de registro necesario para añadir e identificar el dispositivo cuando empiece a reportar

## Cómo se conecta este rastreador a Plaspy

El E‑Маяк IP puede entregar coordenadas GPS, alarmas y telemetría a Plaspy tanto por reenvío de SMS como enviando mensajes de protocolo por la conexión de datos celular cuando GPRS está activo. En ambos casos, el dispositivo se configura para apuntar al endpoint y puerto compartidos de Plaspy, de modo que Plaspy ingiera los mensajes automáticamente.

- El rastreador envía SMS o mensajes de protocolo apuntando a d.plaspy.com o 54.85.159.138
- Los mensajes llegan al puerto 8888, que es el puerto estándar de Plaspy para todos los dispositivos
- Elija UDP o TCP en el equipo si se lo solicita; Plaspy soporta ambos transportes
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los datos de posición y alarma
- Una vez reportando, Plaspy muestra ubicación, alarmas de acelerómetro, eventos SOS y telemetría en la plataforma

## Flujo de configuración común

1. Acceda al método oficial de configuración AutoFon para el E‑Маяк IP (comandos SMS, software del proveedor o interfaz de instalador).
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o como el endpoint numérico 54.85.159.138 en el campo de servidor del dispositivo.
3. Ajuste el puerto del servidor a 8888, que es el utilizado por todos los dispositivos compatibles con Plaspy.
4. Si la configuración del rastreador requiere seleccionar un transporte, elija UDP o TCP y guarde esa opción.
5. Aplique o guarde la configuración en el dispositivo y, si el equipo lo requiere, reinícielo para activar los nuevos ajustes.
6. Valide que el dispositivo reporte a Plaspy comprobando la recepción de la primera posición, mensajes de latido o alarmas en la cuenta o interfaz de monitoreo de Plaspy.

## Ejemplos de comandos de configuración

El E‑Маяк IP admite configuración mediante comandos SMS proporcionados por el fabricante o mediante el software de configuración del proveedor. La sintaxis exacta de los comandos y los parámetros disponibles dependen del firmware y de la herramienta del proveedor que utilice. Dado que el dispositivo admite múltiples vías de configuración, consulte la documentación oficial de AutoFon para las plantillas SMS exactas o los pasos del software. Al configurar, use los valores del servidor Plaspy: dominio d.plaspy.com o IP 54.85.159.138 y puerto 8888, seleccionando UDP o TCP si el dispositivo requiere elección de transporte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos SMS disponibles y las opciones de protocolo; verifique la versión de firmware del equipo antes de aplicar ajustes.
- El E‑Маяк IP puede reportar por SMS o por mensajes de protocolo GPRS; elija el método que mejor se adapte a su instalación y plan de datos.
- Si debe elegir entre TCP y UDP, considere la fiabilidad de la red y las recomendaciones del proveedor; Plaspy acepta ambos y detectará automáticamente los detalles del protocolo.
- Mantenga un registro de los números autorizados y PINs necesarios para la configuración por SMS para evitar bloqueos durante la puesta en marcha remota.
- Verifique la colocación de la antena y la orientación de la instalación para garantizar soluciones GPS confiables y conectividad celular durante el reporte inicial.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon E‑Маяк IP con Plaspy permite un rastreo persistente y de bajo mantenimiento para vehículos, contenedores y activos remotos donde la autonomía de batería y la instalación discreta son importantes. Plaspy ingiere los mensajes de posición y alarma del E‑Маяк IP y los presenta en mapas, paneles y canales de alerta para que los equipos operativos puedan monitorear movimiento, eventos SOS y alarmas de aceleración.

Para obtener más información sobre Plaspy y las opciones de integración compatibles visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la guía de instalación y las listas de comandos más recientes en el sitio del fabricante https://www.autofon.ru/.
