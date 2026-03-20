---
slug: /gotop/a5g/configuration
id: a5g-configuration
sidebar_label: Configuration
title: GOTOP - A5G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador GOTOP A5G a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración GOTOP A5G
  - Instalación GOTOP A5G
  - Configuración de servidor GOTOP A5G
  - GOTOP A5G Plaspy
  - Configuración de rastreador GOTOP
  - Configuración del rastreador GPS A5G
  - Configuración de rastreadores GPS para flotas
  - Configuración de rastreador de vehículo para Plaspy
  - Guía GOTOP A5G
  - Configuración de rastreador GPS para Plaspy
---

# GOTOP - Configuración A5G

Esta página documenta el contexto público de configuración para utilizar el rastreador GOTOP A5G con la plataforma Plaspy. Se centra en los ajustes de servidor compartido de Plaspy que debe introducir en el A5G y en el flujo de trabajo práctico para que el dispositivo reporte a Plaspy en tiempo real. Esta guía combina los datos del servidor Plaspy con consideraciones del fabricante según la descripción del A5G.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para preparar el A5G para la conexión a Plaspy y luego consulte la documentación de GOTOP o su herramienta de instalación para comandos y menús específicos del dispositivo.

## Resumen de la configuración

El objetivo al configurar el A5G para Plaspy es apuntar el equipo al endpoint del servidor Plaspy, confirmar los ajustes de transporte y validar que los mensajes de posición y alarma lleguen a la plataforma Plaspy. Dado que Plaspy usa un único puerto y detección automática de protocolo, el A5G solo necesita la dirección del servidor correcta, el puerto y la selección de transporte cuando sea necesario.

- Ingrese el endpoint del servidor Plaspy en el A5G mediante el método oficial de configuración de GOTOP.
- Configure el puerto del servidor en el puerto de Plaspy usado para todos los dispositivos para que el tráfico se enrute correctamente.
- Seleccione UDP o TCP en el A5G si el dispositivo requiere elegir el transporte.
- Aplique y guarde los cambios en la herramienta de configuración del equipo y reinicie el A5G si es necesario.
- Valide que los mensajes de posición y eventos sean visibles en Plaspy después de la configuración.
- Mantenga el firmware del fabricante y los ajustes de APN correctos para conservar la conectividad celular.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

Estos valores son el endpoint público de Plaspy que debe usar al configurar el A5G para asegurar que los datos se entreguen a Plaspy.

## Requisitos típicos antes de la configuración

- Una unidad A5G con energía instalada o accesible para configuración con batería o alimentación del vehículo presente.
- Una SIM celular válida con un plan de datos activo insertada y APN configurado correctamente.
- Acceso al método oficial de configuración GOTOP para el modelo A5G, como una herramienta para Windows, interfaz web o conjunto de comandos SMS provistos por GOTOP.
- Conocimiento de si el equipo requiere seleccionar TCP o UDP para el transporte al servidor.
- Una cuenta de Plaspy o acceso a su instancia de Plaspy para verificar que el dispositivo aparezca después de la configuración.
- Versión de firmware y revisión del dispositivo documentadas para seguir las instrucciones correctas del fabricante.

## Cómo conecta este rastreador a Plaspy

Una vez configurado, el A5G envía actualizaciones periódicas de ubicación, alarmas y telemetría al endpoint y puerto compartido de Plaspy para que los operadores de flota puedan ver el estado y el historial del dispositivo en la plataforma Plaspy. Plaspy determina automáticamente el protocolo del rastreador cuando el dispositivo abre una conexión hacia el endpoint configurado.

- El A5G reporta posicionamiento GPS y fallback por GSM al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los mensajes de telemetría y eventos usan UDP o TCP según la configuración del dispositivo.
- Eventos de alarma como SOS, apertura de puertas, corte de alimentación y disparadores de geocerca se envían al mismo endpoint de Plaspy para su manejo inmediato.
- Plaspy lee el tráfico entrante en el puerto compartido y lo asigna al protocolo detectado automáticamente.
- Tras la conexión exitosa, las actualizaciones de posición y las alertas se hacen visibles en Plaspy para monitoreo e informes.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración GOTOP o al software para el A5G según la documentación del fabricante.
2. En los ajustes de servidor del dispositivo introduzca el dominio d.plaspy.com o la IP 54.85.159.138 como destino.
3. Configure el puerto del servidor en 8888, que es el puerto en el que Plaspy escucha para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el A5G requiere una selección explícita para la conexión al servidor.
5. Configure el APN y los parámetros celulares necesarios para que el A5G pueda establecer conectividad de red.
6. Aplique o guarde la configuración y reinicie el A5G si la herramienta o el firmware requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece y actualiza en la plataforma Plaspy.

## Ejemplos de comandos de configuración

No se proporcionó un conjunto público de comandos en bruto para el A5G en este documento. Los comandos exactos y los menús de configuración varían según el firmware de GOTOP y la herramienta de configuración que utilice. Consulte el manual del GOTOP A5G o la utilidad de configuración para la sintaxis adecuada o el conjunto de comandos SMS para establecer el dominio o la IP del servidor, el transporte y el puerto. Los métodos típicos del fabricante incluyen campos en la interfaz para dominio o dirección IP del servidor, entrada numérica para el puerto y un menú desplegable para seleccionar TCP o UDP.

Si dispone de la lista de comandos SMS o de herramienta de GOTOP proporcionada por su distribuidor, incluya el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 en el comando o en los campos de la interfaz, luego guarde y reinicie el equipo.

## Notas de configuración

- Diferentes versiones de firmware de GOTOP o revisiones de hardware pueden presentar los ajustes en menús distintos o usar formatos de comando SMS distintos. Asegúrese de adaptar la guía al firmware específico de su dispositivo.
- El A5G soporta múltiples bandas celulares y requiere un APN correcto para la conectividad de datos. Confirme que los ajustes de APN están configurados antes de solucionar problemas de conectividad al servidor.
- Elija UDP para menor overhead cuando sea compatible, o TCP si su instalación requiere mayor fiabilidad en la conexión. Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita configurar un puerto específico por dispositivo.
- Utilice actualizaciones de firmware OTA proporcionadas por GOTOP cuando estén disponibles para mantener el dispositivo compatible con los flujos de configuración actuales.

## Por qué usar Plaspy con esta configuración

Emparejar el GOTOP A5G con Plaspy ofrece a las flotas y operadores visibilidad centralizada de la posición GPS, alarmas y telemetría de los vehículos en una sola plataforma. El soporte multibanda celular del A5G, sus modos de posicionamiento dual y sus amplias entradas/salidas para cámaras y sensores lo hacen adecuado para una amplia gama de casos de uso en flotas cuando se configura para reportar a Plaspy.

Para conocer más sobre Plaspy y cómo soporta rastreadores como el A5G visite https://www.plaspy.com. Para los comandos de configuración más recientes por dispositivo, detalles de firmware e instrucciones de instalación, verifique la información actual en el sitio oficial de GOTOP https://www.gotop.cc/ ya que los métodos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
