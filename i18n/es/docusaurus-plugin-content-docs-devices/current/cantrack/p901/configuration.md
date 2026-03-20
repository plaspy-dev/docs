---
slug: /cantrack/p901/configuration
id: p901-configuration
sidebar_label: Configuration
title: CanTrack - P901 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el CanTrack P901 con Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - cantrack p901 configuración
  - cantrack p901 instalación
  - p901 plaspy configuración
  - configuración rastreador p901
  - configuración rastreador cantrack
  - configuración servidor plaspy
  - configuración seguimiento vehicular
  - integración plataforma gps
  - configuración rastreo en tiempo real
  - configuración rastreador trabajador solitario
---

# CanTrack - Configuración del P901

Esta página describe el contexto público de configuración para usar el CanTrack P901 con Plaspy. Presenta los ajustes de servidor y los pasos prácticos que necesitará para apuntar un P901 a Plaspy y así enviar en tiempo real ubicación, telemetría y alertas, además de detallar qué debe verificar antes de la integración. El P901 es un rastreador ultradelgado con formato de tarjeta de identificación que cuenta con conectividad LTE/GPRS, posicionamiento GPS y Beidou, con fallback por LBS, botón SOS, PTT grupal y opciones de configuración remota por SMS, lo que lo hace adecuado para integrarse con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use los valores de servidor de Plaspy que se muestran más abajo al configurar el P901 y consulte la documentación de CanTrack y las herramientas del proveedor para comandos específicos del dispositivo, formatos de SMS o paneles de configuración de software.

## Resumen de la configuración

El objetivo es preparar el P901 para que comunique de forma fiable posiciones y eventos a Plaspy. El proceso típico consiste en apuntar el dispositivo al endpoint y puerto de Plaspy, verificar la conectividad de datos móviles y confirmar que la unidad aparece en la plataforma Plaspy.

- Configure el dispositivo para que reporte a Plaspy usando el endpoint y puerto compartidos de Plaspy.  
- Asegúrese de que el P901 tenga una SIM activa y la configuración de APN correcta para que LTE o GPRS pueda alcanzar Plaspy.  
- Seleccione el modo de transporte (UDP o TCP) que requiera el firmware del dispositivo y guarde el cambio.  
- Valide que el P901 reporte datos GNSS y LBS de fallback a Plaspy y que los eventos SOS o alarmas se entreguen correctamente.  
- Confirme que el firmware esté actualizado y use las herramientas del fabricante o comandos SMS para cualquier configuración remota necesaria.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Requisitos habituales antes de comenzar

- Un P901 cargado y operativo con acceso a la interfaz de configuración del dispositivo o al conjunto de comandos SMS.  
- Una tarjeta SIM válida con plan de datos móviles y la configuración de APN correcta para conectividad LTE/GPRS.  
- Acceso a las herramientas de configuración de CanTrack, referencia de comandos SMS o la app de aprovisionamiento del proveedor para el P901.  
- Una cuenta o despliegue en Plaspy donde pueda verificar que el dispositivo aparece después de la configuración.  
- Conocimiento de si su despliegue requiere seleccionar transporte UDP o TCP en el dispositivo.  
- Opcional: un área de prueba con cielo abierto para obtener bloqueo GNSS y una señal móvil estable para los primeros reportes.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el P901 envía información de ubicación y eventos a través de la red móvil al endpoint y puerto compartidos de Plaspy. Plaspy recibe posiciones GNSS y fallback LBS, muestra el dispositivo en mapas y registra los eventos asociados.

- El rastreador reporta coordenadas derivadas de GNSS (GPS y Beidou) y utiliza LBS como respaldo cuando no hay fijación por satélite.  
- La telemetría y las actualizaciones de estado se transmiten a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Las alarmas SOS, cambios de estado y otros mensajes de evento se reenvían a Plaspy para alertas y registro.  
- Las rutas históricas y los registros de telemetría son visibles en Plaspy una vez que el dispositivo está registrado y reportando correctamente.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del CanTrack P901 o al software (app del fabricante, panel web o conjunto de comandos SMS).  
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor/host.  
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Elija UDP o TCP como transporte si el dispositivo exige una selección explícita.  
5. Aplique o guarde la configuración usando la herramienta del dispositivo o enviando los comandos SMS apropiados según el formato documentado por el proveedor.  
6. Reinicie el P901 si el firmware del dispositivo lo requiere o después de guardar los cambios para asegurar que la configuración entre en vigor.  
7. Valide que el dispositivo reporte a Plaspy revisando su despliegue en Plaspy y confirmando que se reciben posiciones y mensajes de evento.

## Comandos de configuración de ejemplo

El P901 admite configuración remota vía SMS y herramientas de fabricante para ajustar servidor y APN. Los formatos exactos de los comandos y las herramientas varían según el firmware y la versión del proveedor. Como la sintaxis específica del modelo la proporciona CanTrack, consulte la guía oficial de comandos SMS de CanTrack o la utilidad de configuración para conocer los comandos precisos. Acciones típicas que realizará con comandos o herramientas incluyen:

- Establecer el host del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888.  
- Configurar el APN y credenciales para que el dispositivo use LTE/GPRS para datos.  
- Habilitar el modo de transporte elegido (UDP o TCP) si el dispositivo lo requiere.

Si necesita ejemplos de SMS o cadenas de comandos paso a paso, consulte la documentación de CanTrack o la guía de aprovisionamiento de su proveedor para la sintaxis exacta que soporta el firmware del P901.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos SMS y la disposición de los menús de configuración; siempre revise las notas de firmware del P901 antes de aplicar cambios masivos.  
- El P901 admite configuración por SMS y aprovisionamiento por software; elija el método que se ajuste al flujo de trabajo de su instalación.  
- Evalúe UDP frente a TCP según su red y requisitos operativos; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Confirme los detalles del APN y del plan de datos de la SIM antes de dirigir el dispositivo al endpoint de Plaspy para evitar retrasos en la conectividad.  
- Al desplegar en masa, pruebe un equipo primero para validar servidor, puerto y transporte con Plaspy antes de escalar la configuración.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack P901 con Plaspy ofrece una solución compacta para organizaciones que requieren visibilidad continua, alertas de eventos y comunicación integrada entre equipos. La forma de tarjeta de identificación del P901, su reporte GNSS más LBS, la capacidad SOS y la configuración remota por SMS lo hacen adecuado para casos de uso como patrullas de seguridad, coordinación de personal en eventos y protección de trabajadores solitarios, donde las funciones de mapeo, alertas e historial de Plaspy aportan valor operativo.

Para saber más sobre Plaspy y cómo la plataforma puede recibir y procesar datos del P901 visite https://www.plaspy.com. Para obtener los comandos de configuración más recientes, notas de firmware y orientación del fabricante para el CanTrack P901, verifique los detalles en la web de CanTrack https://www.cantrackgps.com/ ya que las especificaciones y métodos de instalación del fabricante pueden cambiar con el tiempo.
