---
slug: /ruptela/hcv5_lite/configuration
id: hcv5_lite-configuration
sidebar_label: Configuration
title: Ruptela - HCV5 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ruptela HCV5 Lite con Plaspy, incluye ajustes de servidor y flujo de instalación
keywords:
  - Configuración Ruptela HCV5 Lite
  - Instalación Ruptela HCV5 Lite
  - Ruptela HCV5 Lite Plaspy
  - Configuración del tracker Ruptela
  - Configuración de servidor HCV5 Lite
  - Instalación de rastreo de vehículos
  - Configuración de rastreador GPS
  - Seguimiento de flotas Plaspy
  - Guía de configuración Ruptela
  - Integración de rastreador Plaspy
---

# Ruptela - Configuración del HCV5 Lite

Esta página describe el contexto público de configuración para utilizar el rastreador Ruptela HCV5 Lite con Plaspy. Explica los ajustes públicos y los pasos prácticos necesarios para apuntar un dispositivo HCV5 Lite a los servidores de Plaspy, de modo que el equipo envíe su ubicación y estado a la plataforma. Utilice esta guía junto con la documentación oficial de Ruptela y cualquier herramienta de instalación que tenga disponible.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando el HCV5 Lite admita métodos de configuración local, como Ruptela Device Center, asistentes de instalación o herramientas basadas en BLE, siga esas herramientas y luego aplique los valores de servidor de Plaspy que se indican a continuación.

## Resumen de configuración

El objetivo al configurar un Ruptela HCV5 Lite para Plaspy es preparar el dispositivo para que entregue datos consistentes de ubicación y eventos a la plataforma Plaspy y validar que la comunicación es estable y visible en la interfaz de Plaspy. Esta página se concentra en los ajustes públicos del servidor y en el flujo de trabajo práctico que usan instaladores e integradores para conectar el dispositivo a Plaspy.

- Configure el HCV5 Lite para que reporte al endpoint del servidor de Plaspy y así los mensajes de posición y eventos lleguen al backend de Plaspy.
- Seleccione el transporte (UDP o TCP) y ajuste el dispositivo para usar el puerto de Plaspy que coincide con la configuración compartida de la plataforma.
- Guarde y aplique los ajustes usando la herramienta de configuración de Ruptela o la interfaz local y reinicie el dispositivo si es necesario.
- Valide la conectividad y la visibilidad en Plaspy confirmando que el dispositivo aparece y está reportando al endpoint y puerto compartidos de Plaspy.
- Use las herramientas de instalación de Ruptela y las opciones de configuración por BLE o cable cuando estén disponibles para agilizar la instalación en campo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores corresponden al endpoint público y al puerto que usa Plaspy para todos los dispositivos en la plataforma. Configure el HCV5 Lite para usar el dominio d.plaspy.com o la IP del servidor y establezca el transporte y el puerto como se indica.

## Requisitos típicos antes de la configuración

- Dispositivo con alimentación e instalado según las instrucciones del instalador para que los cambios de configuración puedan guardarse y aplicarse.
- Acceso a las herramientas de configuración de Ruptela, como Device Center, el asistente de instalación u otras herramientas del proveedor mencionadas en la documentación del equipo.
- Conocimiento de si la instalación del HCV5 Lite usará la interfaz de configuración local del dispositivo o un canal de configuración remoto.
- Conectividad de red adecuada para que el dispositivo alcance servidores externos y pueda enviar mensajes salientes a Plaspy.
- Detalles del servidor Plaspy (d.plaspy.com y puerto 8888) disponibles para el instalador al aplicar los ajustes.
- Acceso a la información de versión de firmware y revisión de hardware del dispositivo para confirmar posibles diferencias específicas antes de desplegar ajustes.

## Cómo este rastreador se conecta a Plaspy

Al configurarse para Plaspy, el HCV5 Lite se establece para enviar su telemetría y datos de eventos al endpoint compartido de Plaspy. Plaspy recibe los mensajes de los dispositivos en el mismo puerto para todos los rastreadores compatibles y detecta automáticamente el protocolo correcto, lo que facilita despliegues con múltiples fabricantes.

- El HCV5 Lite se configura para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP en el dispositivo; elija la opción requerida por su flujo de instalación.
- El equipo envía actualizaciones periódicas de posición y mensajes de eventos al endpoint de Plaspy para su procesamiento.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los mensajes, por lo que no se requiere una selección de protocolo por dispositivo en la plataforma.
- Una vez que comienza el reporte, los dispositivos se vuelven visibles en la plataforma Plaspy para monitoreo y uso operativo.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Ruptela (por ejemplo, Ruptela Device Center, el asistente de instalación o la interfaz local compatible).
2. En los ajustes de servidor o destino del dispositivo ingrese el endpoint de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 según lo requerido por Plaspy.
4. Elija UDP o TCP en el dispositivo si la herramienta de configuración requiere seleccionar un transporte.
5. Aplique o guarde la configuración en la herramienta de Ruptela o en la interfaz local.
6. Reinicie el dispositivo si la herramienta o la documentación del equipo indican que es necesario para activar los ajustes.
7. Valide que el HCV5 Lite está reportando a Plaspy confirmando que el dispositivo aparece y envía datos al endpoint de Plaspy.

Siga el orden de operaciones recomendado por Ruptela en su herramienta de configuración y preste atención a cualquier instrucción específica por firmware durante estos pasos.

## Ejemplos de comandos de configuración

El HCV5 Lite puede configurarse usando las herramientas oficiales de Ruptela, interfaces locales o métodos inalámbricos compatibles. La sintaxis exacta de comandos y los parámetros disponibles varían según el firmware de Ruptela y el método de configuración que utilice. Dado que las herramientas del fabricante y el firmware cambian con el tiempo, esta página no incluye cadenas de comandos específicas por dispositivo.

Para comandos en el dispositivo o basados en SMS, consulte la documentación oficial de Ruptela o utilice Ruptela Device Center. Al usar esos métodos, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 y establezca el puerto en 8888. Seleccione UDP o TCP si el equipo lo requiere.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles; siempre confirme la versión de firmware del dispositivo antes de realizar cambios.
- Decida entre UDP y TCP según la preferencia del instalador o los requisitos del dispositivo; Plaspy admite ambos transportes en el puerto 8888.
- Use las herramientas oficiales de configuración de Ruptela y siga los procedimientos del proveedor para guardar y activar los ajustes; algunas herramientas pueden requerir el reinicio del dispositivo.
- La configuración local vía BLE o el asistente de instalación de Ruptela puede estar disponible para este modelo y acelerar las configuraciones en campo.
- Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de configurar el protocolo por dispositivo en la plataforma.

## Por qué usar Plaspy con esta configuración

Conectar el Ruptela HCV5 Lite a Plaspy ofrece una forma sencilla de centralizar los datos de posición y eventos de los vehículos en una única plataforma de gestión de flotas. Usar el endpoint y puerto compartidos de Plaspy simplifica los despliegues multi proveedor y reduce las diferencias de configuración por dispositivo en la plataforma, mientras que las herramientas de Ruptela brindan los controles a nivel de equipo que los instaladores necesitan para una instalación confiable.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona las conexiones de dispositivos, visite https://www.plaspy.com. Para conocer los métodos de configuración específicos por dispositivo, notas de firmware y la documentación detallada del HCV5 Lite, verifique la información más reciente en el sitio del fabricante https://ruptela.com/ ya que el comportamiento del dispositivo y los procedimientos de instalación pueden evolucionar con el tiempo.
