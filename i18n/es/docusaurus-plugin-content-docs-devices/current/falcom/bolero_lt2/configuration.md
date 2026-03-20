---
slug: /falcom/bolero_lt2/configuration
id: bolero_lt2-configuration
sidebar_label: Configuration
title: Falcom - BOLERO-LT2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Falcom BOLERO LT2 y pasos prácticos para conectarlo a Plaspy
keywords:
  - Configuración Falcom BOLERO LT2
  - Instalación Falcom BOLERO LT2
  - Rastreador GPS Falcom Plaspy
  - Configuración servidor BOLERO LT2
  - Integración BOLERO LT2 Plaspy
  - Guía configuración rastreador Falcom
  - Seguimiento vehicular BOLERO LT2
  - Gestión de flotas Falcom Plaspy
  - Configurar rastreador GPS Plaspy
  - Configuración AVL Falcom
---

# Falcom - Configuración BOLERO-LT2

Esta página documenta el contexto público de configuración para usar el rastreador GPS Falcom BOLERO-LT2 con Plaspy. Reúne los ajustes de servidor y el flujo de trabajo prácticos que necesitará para preparar el dispositivo y que se comunique con Plaspy, basándose en información pública sobre el rastreador y la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador a nivel de plataforma. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, así que use esta guía como referencia práctica y verifique los procedimientos específicos del equipo con la documentación de Falcom.

## Resumen de configuración

El objetivo del proceso de configuración es apuntar el BOLERO-LT2 al endpoint del servidor de Plaspy, asegurar que el rastreador pueda establecer un enlace de datos móviles y validar que las actualizaciones de posición y estado sean visibles en Plaspy. Normalmente esto implica usar el método o la herramienta de configuración de Falcom para ajustar los parámetros del servidor, el transporte y cualquier configuración del operador necesaria.

- Configure el punto de conexión del servidor para que el rastreador reporte a Plaspy
- Seleccione el modo de transporte adecuado (UDP o TCP) si el dispositivo lo requiere
- Proporcione el APN del operador y verifique la operatividad de la SIM para habilitar la conectividad GSM GPRS
- Guarde y aplique los ajustes y reinicie la unidad si el dispositivo lo exige
- Verifique que el rastreador aparezca y reporte correctamente dentro de la plataforma Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor al configurar el BOLERO-LT2 para conectarlo a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe conexiones

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe establecer el puerto 8888 al apuntar el BOLERO-LT2 al endpoint de Plaspy.

## Requisitos habituales antes de la configuración

- Confirme que el BOLERO-LT2 tiene alimentación y es accesible para la configuración
- Una tarjeta SIM operativa con datos móviles habilitados y conocer el APN del operador
- Acceso al método o software oficial de configuración de Falcom para el BOLERO-LT2
- Detalles de identificación del dispositivo como IMEI o ID para emparejar la unidad en Plaspy
- Cobertura de red en el sitio de instalación que permita comunicación GSM GPRS
- Una cuenta o proyecto en Plaspy donde se registrará y validará el dispositivo

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el BOLERO-LT2 envía datos de ubicación GPS y estado del dispositivo a través de la red móvil al endpoint y puerto del servidor Plaspy. Plaspy escucha en el endpoint y puerto compartidos e interpreta automáticamente el protocolo entrante para mostrar el dispositivo en la plataforma.

- El rastreador transmite datos de posición a d.plaspy.com o a la IP 54.85.159.138
- Los datos se envían a Plaspy en el puerto 8888
- El transporte se selecciona como UDP o TCP según la configuración del equipo
- Plaspy identifica el protocolo automáticamente y analiza los mensajes entrantes
- Una vez recibidos los mensajes, la ubicación y el estado son visibles en Plaspy para monitoreo e informes

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Falcom para el BOLERO-LT2 (herramienta del fabricante, interfaz web o comandos SMS según lo proporcione Falcom).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la opción de servidor del rastreador.
3. Configure el puerto del servidor en 8888.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere elegirlo.
5. Configure cualquier APN del operador o ajustes relacionados con la SIM necesarios para la conectividad de datos GSM GPRS y guarde los cambios.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda o exige un reinicio.
7. Valide que el dispositivo esté reportando a Plaspy confirmando la recepción de datos y las actualizaciones de ubicación visibles en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El BOLERO-LT2 puede configurarse usando las herramientas de Falcom, aprovisionamiento en la nube o interfaces de comandos SMS/terminal del fabricante. Los comandos exactos varían según el firmware y las herramientas del proveedor, por lo que debe consultar la documentación de Falcom para la sintaxis. Dado que los comandos difieren entre versiones de firmware y métodos de aprovisionamiento, esta sección no presenta comandos específicos del proveedor. Use la utilidad de configuración de Falcom o la referencia oficial de comandos para ejecutar las siguientes acciones lógicas de configuración:

- Establecer servidor a d.plaspy.com o 54.85.159.138
- Establecer puerto del servidor a 8888
- Seleccionar transporte UDP o TCP si es necesario
- Configurar el APN del operador y guardar
- Reiniciar el dispositivo si es necesario y verificar el reporte

Si dispone de comandos SMS o de consola proporcionados por Falcom en la documentación oficial, aplíquelos en el orden que Falcom recomiende y luego valide la conectividad con d.plaspy.com en el puerto 8888.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús de configuración, los transportes disponibles y la sintaxis de comandos; verifique los comandos para el firmware específico de su dispositivo.
- Elija UDP o TCP según el soporte del dispositivo y la fiabilidad de la red; Plaspy acepta ambos transportes en el puerto 8888.
- El BOLERO-LT2 utiliza GSM GPRS para la transmisión de datos, por lo que debe asegurarse de configurar el APN del operador y que la SIM tenga saldo o cuota de datos.
- Las prácticas de instalación pueden variar entre instalaciones fijas en interiores y montajes en campo; siga las indicaciones de Falcom para antena y cableado de alimentación.
- Confirme siempre el IMEI o el identificador del dispositivo para emparejar la unidad dentro de Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Integrar el Falcom BOLERO-LT2 con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación y estado de vehículos desde un rastreador fiable y mostrar esa información en una única plataforma de gestión de flotas. El uso de los ajustes de servidor compartidos de Plaspy mantiene la configuración consistente entre dispositivos y reduce el trabajo al administrar múltiples modelos de rastreadores.

Learn more about Plaspy and how it supports tracker integrations at https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and official commands for the Falcom BOLERO-LT2, verify details on the manufacturer site https://www.falcom.de. Manufacturer specifications and setup methods can change over time, so always check Falcom documentation for the most current procedures.
