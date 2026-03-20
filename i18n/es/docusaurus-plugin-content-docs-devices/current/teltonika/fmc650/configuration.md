---
slug: /teltonika/fmc650/configuration
id: fmc650-configuration
sidebar_label: Configuration
title: Teltonika - FMC650 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMC650 para Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMC650
  - Instalación Teltonika FMC650
  - Teltonika FMC650 Plaspy
  - Configuración servidor FMC650
  - Configuración rastreador GPS FMC650
  - Rastreo de flotas FMC650
  - Configuración telemática FMC650
  - Ajustes APN FMC650
  - Configuración rastreador Teltonika
  - Configuración dispositivo Plaspy
---

# Teltonika - FMC650 Configuración

Esta página documenta el contexto público de configuración para usar el Teltonika FMC650 con la plataforma Plaspy. Se centra en los ajustes compartidos del servidor Plaspy, los pasos habituales para preparar un FMC650 para conectividad con la plataforma y un ejemplo de comando SMS por lotes que suele emplearse para aplicar parámetros básicos de red y servidor. Utilice estas indicaciones junto con la documentación oficial de Teltonika y los datos APN de su operador.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Las herramientas de configuración del fabricante, versiones de firmware, revisiones de hardware, tipo de instalación y flujos de aprovisionamiento del proveedor pueden cambiar la forma en que aplica estos parámetros en el FMC650, por lo que debe seguir las instrucciones del fabricante para el método de configuración exacto que vaya a utilizar.

## Resumen de la configuración

Configurar un FMC650 para Plaspy prepara el equipo para enviar fijaciones GNSS y telemetría del vehículo a un endpoint conocido de Plaspy, de modo que la unidad sea visible y reportable en el panel de Plaspy. El objetivo práctico es definir el APN celular, apuntar el rastreador al servidor de Plaspy, elegir el modo de transporte si es necesario y verificar que el dispositivo reporte correctamente a la plataforma.

- Configure el APN del dispositivo y las credenciales SIM necesarias para que el rastreador tenga acceso a Internet.
- Configure el rastreador para que reporte al dominio o IP del servidor Plaspy en el puerto compartido utilizado por Plaspy.
- Seleccione UDP o TCP si el FMC650 requiere elegir el tipo de transporte durante la configuración.
- Aplique/guarde la configuración y reinicie el dispositivo si el procedimiento del proveedor lo indica.
- Valide la visibilidad del dispositivo en Plaspy confirmando que el rastreador envíe actualizaciones regulares de posición y telemetría.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el tipo de transporte si el dispositivo exige una selección explícita
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un FMC650 alimentado y con la variante regional correcta, y antenas externas instaladas si su instalación lo requiere.
- Una tarjeta SIM activa con APN válido y cualquier usuario o contraseña que su operador móvil exija.
- Acceso al método de configuración de Teltonika que vaya a utilizar, como comandos SMS, el software de Teltonika o herramientas web/console según el firmware del equipo.
- IMEI del dispositivo y número telefónico de la SIM para aprovisionamiento por SMS o gestión del equipo.
- Conocimiento del entorno de instalación y consideraciones de cableado en vehículo para alimentación y conexiones CAN/serial.
- Acceso al aprovisionamiento de dispositivos Plaspy o a la cuenta donde se registrará y validará el rastreador.

## Cómo se conecta este rastreador a Plaspy

El FMC650 envía posiciones GNSS y telemetría del vehículo a través de su conexión celular al backend de Plaspy usando el endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy ingiere estos mensajes y los muestra en mapas, líneas de tiempo y paneles telemáticos para que los gestores de flota puedan monitorear vehículos y responder a eventos.

- El rastreador se apunta a d.plaspy.com (o a la IP del servidor Plaspy) y al puerto 8888 para todo el tráfico del dispositivo.
- El equipo transmite fijaciones de ubicación y telemetría por el transporte seleccionado (UDP o TCP).
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.
- Los datos enviados por el FMC650 se vuelven visibles en Plaspy para seguimiento en tiempo real, diagnóstico e informes de eventos.
- Mensajes regulares de latido y de posición permiten a Plaspy monitorizar la disponibilidad y el estado de conectividad del dispositivo.

## Flujo de configuración típico

1. Acceda al método de configuración oficial del Teltonika FMC650 que vaya a utilizar (aprovisionamiento por SMS, Teltonika Configurator u otra herramienta del proveedor) según el firmware del equipo.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera el método de configuración.
3. Configure el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si la configuración del dispositivo exige una selección explícita del transporte.
5. Introduzca el APN del operador y cualquier nombre de usuario o contraseña APN que su SIM requiera.
6. Aplique o guarde la configuración y reinicie el rastreador si las instrucciones del proveedor indican que es necesario.
7. Valide que el FMC650 reporte a Plaspy comprobando el estado en línea del dispositivo y las posiciones recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El FMC650 puede configurarse mediante comandos SMS por lotes en muchos flujos de despliegue. El siguiente comando público por SMS establece los marcadores de APN y apunta el equipo al servidor y puerto de Plaspy. Conserve los marcadores al preparar el SMS y sustituya por los valores de su operador.

- Comando SMS por lotes de ejemplo para establecer APN y parámetros del servidor Plaspy

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando anterior:
- Reemplace [apn] por el APN de su operador móvil.
- Reemplace [apnu] por el usuario APN si su operador lo exige; deje vacío si no aplica.
- Reemplace [apnp] por la contraseña APN si su operador la requiere; deje vacío si no aplica.
- El comando incluye d.plaspy.com y el puerto 8888 para que el rastreador apunte al endpoint de Plaspy.
- El parámetro final 2006:1 forma parte del lote de parámetros; consulte la documentación de parámetros de Teltonika para el significado exacto de los códigos numéricos antes de modificar otros códigos.

Si prefiere usar la IP del servidor en lugar del dominio en las herramientas del proveedor, ingrese 54.85.159.138 y el puerto 8888 de la misma manera que lo requiera su utilidad de configuración.

## Notas de configuración

- El firmware y su versión pueden cambiar los nombres de los parámetros y los flujos de aprovisionamiento; siempre verifique los códigos de los parámetros con la documentación del Teltonika FMC650 correspondiente a su revisión de firmware.
- La elección entre TCP y UDP depende del proveedor y de la red; elija el transporte que se adapte al comportamiento de su operador y a las limitaciones de la instalación.
- El aprovisionamiento por SMS es un método público común, pero las herramientas de software del proveedor (o los sistemas de aprovisionamiento de flotas) pueden ofrecer opciones más completas de configuración y validación.
- Las variantes regionales del FMC650 pueden diferir en el soporte de bandas celulares; confirme que tiene la variante correcta para su mercado antes del despliegue.
- Plaspy detecta automáticamente los protocolos de los rastreadores y utiliza un único puerto compartido, por lo que es preferible centrarse en la dirección correcta del servidor y el APN en lugar de modificar valores de protocolo en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el FMC650 con Plaspy proporciona a los operadores de flota acceso a ubicación en tiempo real, telemetría del vehículo y datos de diagnóstico en una sola plataforma. Las interfaces telemáticas profesionales y el diseño robusto del FMC650 lo hacen adecuado para flotas pesadas, semirremolques y maquinaria especializada, mientras que el backend de Plaspy agrega y muestra la telemetría para la toma de decisiones operativas.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para los parámetros específicos más recientes del dispositivo, notas de firmware y definiciones de códigos de parámetros del FMC650, verifique los detalles actuales en el sitio oficial del fabricante https://www.teltonika-gps.com/
