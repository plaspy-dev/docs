---
slug: /gotop/g20/configuration
id: g20-configuration
sidebar_label: Configuration
title: GOTOP - G20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el GOTOP G20 con Plaspy, incluye ajustes de servidor, puerto 8888, opciones de transporte y flujo de instalación
keywords:
  - Configuración GOTOP G20
  - Instalación GOTOP G20
  - Configuración servidor GOTOP G20
  - GOTOP G20 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS GOTOP
  - Seguimiento vehicular G20
  - Rastreador de activos G20
  - Implementación GOTOP G20
  - Configuración plataforma GPS
---

# GOTOP - Configuración del G20

Esta página documenta el contexto público de configuración para usar el rastreador GOTOP G20 con la plataforma Plaspy. Resume los ajustes de servidor compartidos de Plaspy que deberá aplicar en el dispositivo o mediante la herramienta del fabricante, explica las condiciones previas necesarias y describe un flujo de trabajo práctico para que el G20 reporte a Plaspy. Es una guía de configuración pensada para instaladores técnicos y administradores de flota que preparan el dispositivo para su integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo, por lo que no es necesario elegir un parser específico en el servidor. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía junto con la documentación oficial de GOTOP y la utilidad de configuración del proveedor.

## Resumen de configuración

El proceso de configuración orienta al G20 para que envíe su ubicación y eventos de estado a Plaspy, de modo que los dispositivos aparezcan y se actualicen de forma fiable en la plataforma. Usted configurará el equipo para que apunte al endpoint del servidor Plaspy y confirmará la conectividad desde el rastreador hacia la plataforma.

- Apunte el GOTOP G20 al endpoint del servidor Plaspy para que los paquetes de ubicación se envíen a d.plaspy.com o a la IP del servidor Plaspy.
- Configure el transporte y el puerto del dispositivo de forma coherente con los ajustes de Plaspy para que la plataforma acepte los paquetes.
- Verifique en el dispositivo o mediante la herramienta del fabricante que el rastreador tiene conectividad de red y una SIM activa.
- Confirme que el dispositivo empieza a reportar en Plaspy para que las ubicaciones y las alarmas sean visibles.
- Guarde y aplique los cambios de firmware o configuración, y reinicie el G20 si es necesario para activar los ajustes.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el GOTOP G20:

- Nombre de dominio del servidor d.plaspy.com
- Dirección IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP pueden seleccionarse en el dispositivo si es necesario
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere selección de protocolo en el servidor

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo cuando llegan los datos.

## Requisitos previos habituales

- Un GOTOP G20 con batería cargada y una tarjeta micro SIM activa con datos y voz provisionada en redes compatibles con las bandas 2G del dispositivo.
- Acceso al método de configuración oficial de GOTOP o a la herramienta del proveedor (interfaz web, herramienta USB/serial, comandos SMS o utilitario móvil según el fabricante).
- Fuente de alimentación o batería completamente cargada adecuada para la versión de batería del G20 que esté utilizando.
- Cobertura de red en el área de instalación que soporte las bandas 2G del dispositivo.
- Una cuenta en Plaspy o acceso a la plataforma para validar que el dispositivo aparece y reporta después de la configuración.
- Conocimiento del APN o credenciales del operador necesarios para la SIM si la herramienta del fabricante los solicita.

## Cómo se conecta este rastreador a Plaspy

El GOTOP G20 se configura para enviar su información GPS y de estado al endpoint del servidor Plaspy, usando el puerto compartido de Plaspy. Plaspy recibe los paquetes entrantes y detecta automáticamente el protocolo del rastreador, de modo que los datos reportados se analizan y muestran en la plataforma.

- El rastreador se ajusta para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP dependiendo de las opciones de configuración del dispositivo y la preferencia del instalador.
- Las actualizaciones de ubicación y los eventos del dispositivo se transmiten desde el rastreador a Plaspy, donde quedan disponibles en la plataforma.
- Tras la configuración inicial y el reinicio, el dispositivo debería comenzar a reportar de forma regular y cualquier alarma o mensaje de estado compatible con el G20 se reenviará a Plaspy.
- La detección automática de protocolos de Plaspy permite que la plataforma intente interpretar los paquetes entrantes sin requerir selección manual del protocolo.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software de configuración oficial de GOTOP proporcionado por su proveedor o el fabricante.
2. En los ajustes de red/servidor del rastreador, ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como endpoint de reporte.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Ingrese el APN del operador o las credenciales de la SIM si la herramienta de configuración lo solicita.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
7. Reinicie el dispositivo si la herramienta o el firmware lo requieren para activar los nuevos ajustes.
8. Verifique que el dispositivo reporte a Plaspy comprobando el estado en su cuenta de Plaspy y confirmando las actualizaciones de posición entrantes.

## Ejemplos de comandos de configuración

El método de configuración del GOTOP G20 varía según la herramienta del proveedor y el firmware. Dado que esta página cubre los ajustes públicos de Plaspy pero no un conjunto universal de comandos para todo el firmware posible, los comandos exactos difieren entre fabricantes y utilidades. Los métodos habituales del fabricante incluyen una aplicación de configuración, interfaz web o comandos SMS suministrados por GOTOP o su proveedor.

Si dispone de comandos SMS o serial específicos del documento de configuración de GOTOP, aplíquelos siguiendo las instrucciones del proveedor y sustituya los valores de servidor por los de Plaspy cuando aparezcan marcadores de servidor, IP o puerto.

Explicación de marcadores típicos en cadenas de comandos del fabricante:
- Si un comando incluye marcadores como {{apn}} o similares, reemplácelos por el APN del operador, usuario o contraseña que requiera su SIM.

Como no se proporcionaron comandos específicos del modelo en la entrada pública de configuración para esta página, consulte el manual de GOTOP o la guía de configuración del proveedor para la sintaxis exacta de los comandos para establecer servidor y puerto.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar las etiquetas de menú exactas, la sintaxis de comandos o el comportamiento de la herramienta de configuración. Confirme siempre con la versión de firmware del dispositivo con la que esté trabajando.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos y detectará automáticamente el protocolo usado por el dispositivo.
- El G20 requiere una micro SIM y opera en las bandas 2G indicadas en las especificaciones del dispositivo. Verifique que el servicio 2G esté disponible en su área de despliegue.
- Si utiliza comandos de configuración por SMS proporcionados por GOTOP, asegúrese de que el formato de los comandos coincida con la versión de firmware; la sintaxis SMS puede variar según la variante del modelo.
- Mantenga un registro del endpoint de servidor, transporte y puerto aplicados a cada dispositivo para simplificar la resolución de problemas y las auditorías de la flota.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G20 con Plaspy ofrece una forma sencilla de centralizar el reporte de ubicación y eventos para el seguimiento de personas y activos. Al configurar el dispositivo para que apunte al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen reportes consistentes, pueden integrar alarmas y eventos de movimiento en los flujos de trabajo de flota y mantener visibilidad operativa sobre vehículos y activos.

Para obtener más información sobre Plaspy y cómo gestiona dispositivos como el GOTOP G20, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante consulte el sitio oficial de GOTOP https://www.gotop.cc/ ya que el comportamiento y los pasos de configuración pueden cambiar con revisiones de firmware y hardware.
