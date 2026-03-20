---
slug: /gotop/c790/configuration
id: c790-configuration
sidebar_label: Configuration
title: GOTOP - C790 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador GOTOP C790 a Plaspy con ajustes de servidor y pasos de configuración prácticos
keywords:
  - configuración GOTOP C790
  - instalación GOTOP C790
  - configuración servidor GOTOP C790
  - GOTOP C790 Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - seguimiento gestión de flotas
  - configuración plataforma de seguimiento
  - configuración rastreador GPS GPRS
  - guía de configuración C790
---

# GOTOP - C790 Configuración

Esta página describe la información pública necesaria para usar el rastreador GOTOP C790 con la plataforma Plaspy. Resume los ajustes de servidor y el flujo de configuración prácticos que permiten apuntar un C790 a Plaspy para que el equipo informe ubicación y eventos. El C790-Y es un rastreador GPS vehicular compacto que utiliza posicionamiento GPS y Beidou junto con comunicación GPRS para ofrecer seguimiento en tiempo real; incluye funciones como corte remoto de combustible, detección de ACC, alarmas, SOS, alertas de geocerca y almacenamiento del historial de conducción.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información aquí para aplicar los valores públicos del servidor de Plaspy y validar la conectividad; además revise la documentación oficial de GOTOP para detalles específicos del dispositivo y el comportamiento del firmware más reciente.

## Resumen de la configuración

Este proceso prepara el GOTOP C790 para comunicarse con Plaspy, de modo que el rastreador aparezca en la plataforma y reporte datos de ubicación y eventos de forma fiable. Los pasos se enfocan en actualizar el destino del servidor del dispositivo, confirmar los ajustes de transporte y verificar que Plaspy reciba los datos.

- Configure el C790 para enviar datos al endpoint del servidor de Plaspy, de modo que las ubicaciones y alarmas lleguen a la plataforma.
- Seleccione el método de transporte apropiado (UDP o TCP) y defina el puerto correcto que usa Plaspy.
- Verifique que el rastreador tenga conectividad de datos móviles (GPRS) y el APN correcto si la SIM lo requiere.
- Guarde y aplique los ajustes, luego confirme que el dispositivo sea visible y reporte en Plaspy.
- Solucione problemas de conectividad revisando la señal, el estado de la SIM y los registros del dispositivo cuando estén disponibles.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el GOTOP C790. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (device may be configured to use either)
- Plaspy automatically detects the tracker protocol and associates data from the device

## Requisitos habituales antes de la configuración

- Un rastreador GOTOP C790 instalado y alimentado en el vehículo con suministro eléctrico estable.
- Una tarjeta SIM activa con datos móviles habilitados y apta para comunicación GPRS.
- Acceso al método oficial de configuración de GOTOP o al software utilizado para este modelo.
- Conocimiento del APN correcto y de las credenciales de la SIM si son necesarias.
- Confirmación de la versión de firmware o la revisión de hardware del dispositivo, ya que esto puede afectar las opciones de menú y los comandos.
- Herramientas o acceso para reiniciar el equipo tras la configuración si es necesario.

## Cómo se conecta este rastreador a Plaspy

El GOTOP C790 envía datos de ubicación y eventos por GPRS al endpoint y puerto del servidor de Plaspy para que el dispositivo sea visible y gestionable desde la plataforma. Plaspy recibe los paquetes entrantes en el servidor compartido y los asigna al dispositivo correspondiente mediante su detección automática de protocolo.

- El dispositivo reporta actualizaciones de posición al dominio o IP del servidor Plaspy en el puerto 8888.
- El transporte se establece usando UDP o TCP según la configuración del equipo.
- Reportes de eventos como SOS, geocercas, alarmas de velocidad y cambios de ACC se transmiten a Plaspy para generar alertas en la plataforma.
- Plaspy reconoce automáticamente el protocolo del rastreador y procesa el flujo de datos entrante.
- La validación rutinaria implica comprobar que el rastreador aparece en línea en Plaspy y que existen muestras de posición recientes.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de GOTOP para el C790 (herramienta web del fabricante, app de configuración o interfaz por SMS/comandos según lo provea GOTOP).
2. En los ajustes de servidor del equipo, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los equipos).
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir.
5. Aplique o guarde la configuración en la herramienta de GOTOP o enviando los comandos apropiados.
6. Reinicie el dispositivo si el método de configuración o el firmware exige un reboot para aplicar los cambios.
7. Verifique que el equipo reporte a Plaspy confirmando que el rastreador aparece en línea y que la plataforma muestra datos recientes.

## Comandos de configuración de ejemplo

Los comandos exactos o las pantallas de configuración para el GOTOP C790 varían según la versión de firmware y la herramienta del fabricante que utilice. Dado que los métodos del fabricante difieren, consulte la guía de configuración de GOTOP o las herramientas de soporte para la sintaxis exacta de los comandos. Plaspy requiere los mismos endpoint y puerto que se muestran arriba (d.plaspy.com o 54.85.159.138 en el puerto 8888) y acepta conexiones por UDP o TCP.

Si dispone de cadenas de comandos GOTOP o de una interfaz SMS para configuración según la documentación oficial, aplique el dominio o IP y el puerto exactamente como se indica y luego guarde y reinicie el equipo. Mantenga los marcadores de posición como APN, APN user y APN password (por ejemplo [apn], [apnu], [apnp]) si los comandos del fabricante los utilizan, y reemplace esos marcadores con los valores de su operador de SIM.

## Notas sobre la configuración

- Las diferencias de firmware y herramientas pueden cambiar las etiquetas de los menús o el formato de los comandos; confirme siempre la sintaxis para su versión de firmware.
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega; pruebe ambos si el equipo o la red muestra reportes intermitentes.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que el endpoint y el puerto del servidor son los valores primarios requeridos.
- Asegúrese de que el APN de la SIM sea correcto para datos GPRS; un APN faltante o incorrecto es una causa frecuente de fallas en el reporte.
- Para instalaciones que empleen funciones de inmovilización remota o corte de combustible, confirme que esas funciones estén habilitadas y pruebe en un entorno seguro siguiendo las indicaciones del fabricante.

## Por qué usar Plaspy con esta configuración

Apuntar el GOTOP C790 a Plaspy ofrece a las organizaciones una forma directa de recopilar datos de ubicación y eventos de los vehículos en una sola plataforma. Con Plaspy recibiendo actualizaciones de posición, alarmas y notificaciones de eventos, los gestores de flotas pueden monitorear la actividad vehicular, responder a alertas y mantener la visibilidad operativa usando un endpoint de servidor unificado y una configuración de puerto consistente.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions on the official GOTOP website https://www.gotop.cc/.
