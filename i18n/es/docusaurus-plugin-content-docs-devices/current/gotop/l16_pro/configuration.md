---
slug: /gotop/l16_pro/configuration
id: l16_pro-configuration
sidebar_label: Configuration
title: GOTOP - L16 PRO Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para GOTOP L16 PRO y Plaspy con ajustes de servidor requisitos y flujo de trabajo
keywords:
  - Configuración GOTOP L16 PRO
  - Instalación GOTOP L16 PRO
  - GOTOP L16 PRO Plaspy
  - Configuración rastreador GOTOP
  - Configuración servidor L16 PRO
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS smartwatch
  - Rastreador wearable Plaspy
  - Guía configuración rastreador GPS
  - Configuración firmware GOTOP
---

# GOTOP - L16 PRO Configuración

Esta página documenta el contexto público de configuración para usar el GOTOP L16 PRO con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor, los requisitos previos y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, de modo que la ubicación, las alertas SOS y la telemetría de salud aparezcan en su cuenta de Plaspy. La orientación aquí se basa en la descripción del dispositivo y en las prácticas estándar de integración de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos que realice en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use esta página para entender qué valores ingresar en su herramienta de configuración GOTOP o en su flujo de aprovisionamiento y luego confirme las instrucciones específicas del dispositivo con la documentación de GOTOP.

## Resumen de configuración

Preparar un L16 PRO para Plaspy consiste principalmente en dirigir su endpoint de reporte al servidor de ingesta de Plaspy, elegir el método de transporte que soporte el dispositivo y validar que el reloj pueda registrarse y enviar datos a través de la red móvil o eSIM. Una vez configurado, Plaspy detectará automáticamente el protocolo del dispositivo e ingresará la ubicación y los datos de sensores para visualización, alertas e informes históricos.

- Configure los ajustes del servidor del dispositivo para apuntar a Plaspy y asegurar la entrega fiable de ubicación y telemetría.
- Seleccione UDP o TCP como transporte si el equipo requiere elegir uno y configure el puerto compartido de Plaspy.
- Verifique la conectividad celular y la provisión de la SIM o eSIM para que el dispositivo pueda alcanzar Plaspy.
- Guarde y aplique la configuración, y luego confirme que el dispositivo sea visible en Plaspy.
- Valide las alertas SOS, geocercas y eventos de telemetría para asegurarse de que las notificaciones se enruten correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Todos los dispositivos en Plaspy usan el mismo puerto. Use el dominio d.plaspy.com o la IP 54.85.159.138 según lo permita su herramienta de configuración, y establezca el transporte en UDP o TCP si la configuración del rastreador lo requiere. Plaspy detectará el protocolo del rastreador de forma automática.

## Requisitos habituales antes de la configuración

- El dispositivo está cargado y encendido, con el L16 PRO listo para configurar.
- Una nano SIM válida o eSIM provisionada con datos móviles y voz según lo requiera su despliegue.
- Acceso al método oficial de configuración GOTOP, como su app de aprovisionamiento, herramienta web o procedimientos SMS/OTA descritos por el fabricante.
- Conectividad de red para alcanzar d.plaspy.com o 54.85.159.138 desde la red del dispositivo.
- Acceso administrativo a su cuenta de Plaspy para confirmar el registro y la visibilidad del dispositivo después de la configuración.
- Conocimiento de los campos o marcadores que su herramienta de aprovisionamiento requiere para APN o autenticación.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el L16 PRO envía fijaciones de ubicación, alertas SOS y telemetría de salud a través de su enlace celular hacia el endpoint de ingesta compartido de Plaspy. Plaspy procesa los paquetes entrantes, detecta el protocolo y mapea los datos del dispositivo en la plataforma para monitoreo en vivo y generación de alertas.

- El rastreador reporta al endpoint del servidor Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Puede seleccionar transporte UDP o TCP en el dispositivo si la interfaz de configuración lo requiere.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Ubicación, SOS, alertas por caída y telemetría de salud se ingresan y muestran en el panel de Plaspy.
- Una vez establecida la comunicación, Plaspy almacena y procesa los datos históricos para informes y reglas.

## Flujo de configuración típico

1. Acceda al método oficial de configuración GOTOP o al software proporcionado por el fabricante o distribuidor.
2. En los ajustes de servidor o APN, ingrese el servidor de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, que es el puerto común de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno.
5. Guarde o aplique la configuración con la herramienta del fabricante o el flujo de aprovisionamiento.
6. Reinicie el L16 PRO si el dispositivo o la herramienta indican que se requiere un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta, y pruebe el envío de SOS y la telemetría.

Siga cualquier indicación adicional del fabricante o pasos en las herramientas GOTOP donde se requieran campos como APN o autenticación.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o las cadenas SMS pueden variar según el firmware y el método de aprovisionamiento que proporcione GOTOP. Algunos distribuidores e instaladores usan software GOTOP, comandos SMS o un servicio de aprovisionamiento OTA para aplicar ajustes. Debido a que los comandos difieren por firmware y región, consulte la documentación de GOTOP para los formatos de comandos específicos del dispositivo.

Al usar una herramienta de configuración, los valores clave que debe establecer son el endpoint y el puerto de Plaspy:
- Dominio del servidor d.plaspy.com o IP del servidor 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP si es requerido

Plaspy detectará automáticamente el protocolo del dispositivo una vez que el dispositivo envíe datos al endpoint y puerto configurados.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús, las cadenas de comandos o el orden de los campos en las herramientas de configuración GOTOP.
- Si su herramienta de aprovisionamiento acepta dominio o IP, se recomienda usar d.plaspy.com para facilitar futuros cambios de servidor; la IP 54.85.159.138 se ofrece como alternativa.
- El dispositivo puede requerir ingresar campos APN por separado en la herramienta del fabricante; confirme los valores de APN con su operador móvil.
- Elija UDP para menor overhead cuando esté soportado, o TCP si el dispositivo o el entorno móvil recomiendan un transporte orientado a conexión.
- Consulte siempre la documentación oficial de GOTOP para cualquier sintaxis de SMS o comandos OTA antes de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP L16 PRO con Plaspy integra la ubicación wearable y la telemetría de salud en una sola plataforma de monitoreo, de modo que los cuidadores y administradores puedan recibir ubicación en tiempo real, alertas SOS y datos de sensores en un mismo lugar. La detección automática de protocolos y el puerto de ingesta compartido de Plaspy reducen la necesidad de elegir protocolos por dispositivo en la plataforma y simplifican despliegues a gran escala.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la guía de instalación más reciente en el sitio del fabricante https://www.gotop.cc/.
