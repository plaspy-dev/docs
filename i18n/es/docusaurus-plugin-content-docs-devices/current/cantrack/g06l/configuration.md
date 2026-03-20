---
slug: /cantrack/g06l/configuration
id: g06l-configuration
sidebar_label: Configuration
title: CanTrack - G06L Configuration
sidebar_class_name: menu_item_tracker
description: Configure el CanTrack G06L para Plaspy con ajustes de servidor, flujo de trabajo y guía práctica de instalación
keywords:
  - Configuración CanTrack G06L
  - Instalación CanTrack G06L
  - Integración G06L Plaspy
  - Configuración rastreador GPS G06L
  - Configuración seguimiento de vehículos
  - Configuración servidor Plaspy
  - Configuración firmware G06L
  - Guía integración rastreador GPS
  - Configuración rastreo de flotas
  - Configuración anti robo del rastreador
---

# CanTrack - Configuración G06L

Esta página describe el contexto de configuración pública para usar el CanTrack G06L con la plataforma Plaspy. Explica los ajustes compartidos del servidor que Plaspy requiere, los pasos habituales de preparación antes de la integración y el flujo práctico para configurar el G06L de modo que reporte ubicación y telemetría a Plaspy. Utilice esta guía junto con la documentación del fabricante para detalles específicos del dispositivo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. La guía siguiente se centra en el endpoint público de Plaspy y en los pasos prácticos que ejecutará con el G06L usando USB en PC, GPRS o métodos de configuración por SMS.

## Resumen de configuración

El objetivo de la configuración es preparar el G06L para que comunique de forma confiable datos de posición, alarmas y telemetría a Plaspy y sea visible en el panel de Plaspy. Normalmente la configuración establece el endpoint del servidor y el transporte, garantiza que el dispositivo tenga acceso a la red y valida que Plaspy acepte los mensajes entrantes.

- Direccionar la telemetría del dispositivo al servidor de Plaspy para que los datos lleguen a su cuenta
- Seleccionar transporte y puerto compatibles tanto con el dispositivo como con Plaspy
- Validar el acceso de red y las credenciales de la SIM al usar GPRS o LTE
- Confirmar que las alarmas y la telemetría de encendido estén habilitadas para que Plaspy muestre eventos
- Verificar el comportamiento de almacenamiento y subida de datos para recuperar puntos cuando el dispositivo vuelva a estar en línea

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el G06L para Plaspy. Estos valores son necesarios para que el dispositivo reporte a la plataforma Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para este y otros rastreadores compatibles

## Requisitos habituales antes de la configuración

- Una unidad G06L alimentada y accesible con capacidad de configuración vía USB en PC, GPRS o SMS
- Una tarjeta SIM activa con datos habilitados para reportes GPRS o LTE al usar transporte celular
- Acceso al IMEI del dispositivo o identificador para emparejar la unidad en Plaspy después del primer reporte
- Software de configuración del fabricante, cable para PC o lista de comandos SMS según el método elegido
- Una cuenta en Plaspy y la posibilidad de verificar la actividad entrante del dispositivo en la plataforma
- Cobertura celular adecuada en la zona de operación para reportes en tiempo real confiables

## Cómo se conecta este rastreador a Plaspy

El G06L transmite posición GNSS y telemetría por datos celulares al endpoint y puerto del servidor Plaspy especificados en la configuración. Plaspy procesa los mensajes, reconoce automáticamente el protocolo del dispositivo y muestra ubicación en vivo, alarmas y puntos históricos en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El G06L envía fijaciones de posición y telemetría de eventos por UDP o TCP según la configuración
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes
- Alarmas como SOS, movimiento, exceso de velocidad, cambio de encendido y corte de energía se reportan a Plaspy
- Los puntos almacenados en offline se suben cuando se restablece la conexión GPRS o LTE y Plaspy recibe los datos en cola

## Flujo de configuración habitual

1. Acceda al método oficial de configuración CanTrack para el G06L, como el software PC por USB, la configuración GPRS vía SMS o la herramienta proporcionada por el proveedor.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP numérica 54.85.159.138 si su herramienta requiere una dirección IP.
3. Establezca el puerto del servidor en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o el comando SMS.
6. Reinicie el dispositivo si el método de configuración lo requiere para que los nuevos ajustes entren en vigor.
7. Valide en Plaspy que el dispositivo reporte correctamente y que la ubicación, el estado de encendido y los eventos de alarma aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para el G06L dependen del firmware y del canal de configuración del fabricante que utilice. Esta guía no incluye conjuntos de comandos propietarios, pero los métodos comunes para establecer el servidor usan el patrón de host, puerto y parámetros de transporte. Los ejemplos que puede ver en la documentación del fabricante o en guías de configuración por SMS referenciarán el servidor y el puerto de Plaspy como se muestra a continuación.

Si usa un enfoque por comandos SMS, los marcadores de posición pueden verse similares a estos ejemplos que aparecen en guías públicas de dispositivos. Reemplace los marcadores con sus valores reales o las credenciales APN de la SIM cuando sea necesario.

- Ejemplo de estilo de marcador de posición para servidor y puerto usando patrones SMS
```
set server d.plaspy.com 8888
set server 54.85.159.138 8888
set tcp udp_mode on
```

- Si la configuración usa parámetros de APN, puede encontrar variables como {{apn}} {{apnu}} o {{apnp}} que representan el nombre APN del operador de la SIM, el usuario y la contraseña respectivamente. Ejemplo:
```
set apn {{apn}} {{apnu}} {{apnp}}
```

Tenga en cuenta que las cadenas SMS exactas, los pasos del software para PC y los nombres de comando variarán según el firmware. Consulte el manual de configuración del CanTrack G06L para los comandos precisos de su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis y las opciones disponibles; verifique los comandos contra el firmware de la unidad antes de aplicar masivamente.
- Elegir UDP o TCP afecta cómo el dispositivo envía telemetría y cómo la red gestiona las retransmisiones; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Si configura por SMS, asegúrese de que la SIM tenga saldo para SMS y que los parámetros de datos estén correctos para informes GPRS o LTE.
- Use el IMEI del dispositivo y el primer mensaje reportado para emparejar el rastreador con el activo correcto en Plaspy.
- Para implementaciones grandes, pruebe una unidad de extremo a extremo con Plaspy usando d.plaspy.com o 54.85.159.138 y puerto 8888 antes de configurar en masa.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G06L con Plaspy ofrece un rastreo vehicular compacto y confiable con alarmas y telemetría integradas directamente en un entorno de gestión de flotas. El soporte del G06L para detección de encendido, reporte de corte de energía, almacenamiento offline y funciones de control remoto se complementa bien con Plaspy para proporcionar visibilidad en tiempo real, alertas de eventos y reproducción histórica para flujos operativos y de seguridad.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de configuración específicos del dispositivo en https://www.cantrackgps.com/. Los métodos de configuración del fabricante, el comportamiento del firmware y los comandos específicos del equipo pueden cambiar con el tiempo, así que siempre verifique las instrucciones actuales en el sitio oficial de CanTrack antes de desplegar.
