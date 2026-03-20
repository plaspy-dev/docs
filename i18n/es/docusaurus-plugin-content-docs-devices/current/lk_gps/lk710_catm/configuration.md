---
slug: /lk_gps/lk710_catm/configuration
id: lk710_catm-configuration
sidebar_label: Configuration
title: LK-GPS - LK710-CatM Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK710 CatM con los servidores y la plataforma Plaspy
keywords:
  - Configuración LK GPS LK710 CatM
  - Configuración LK710 CatM
  - Configuración rastreador LK GPS
  - Configuración rastreador Plaspy
  - Configuración rastreo vehicular
  - Configuración rastreador gestión de flotas
  - Configuración rastreador Cat M
  - Compatibilidad LK710 Plaspy
  - Configuración servidor rastreador GPS
  - Configuración SMS LK710
---

# LK-GPS - Configuración LK710-CatM

Esta página describe el contexto de configuración pública para usar el LK710‑CatM con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo que deberá seguir para conectar este rastreador Cat‑M a Plaspy, permitiendo el seguimiento en tiempo real, telemetría y el reporte de eventos del inmovilizador. La información aquí ayuda a instaladores e integradores a preparar el dispositivo para que Plaspy lo detecte, ya sea mediante las herramientas del fabricante o configuración por SMS cuando esté disponible.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Revise la documentación del fabricante para comandos específicos del equipo y recomendaciones de seguridad mientras realiza la configuración.

## Resumen de la configuración

Preparar el LK710‑CatM para Plaspy consiste en dirigir el dispositivo hacia el endpoint del servidor Plaspy y confirmar que la ubicación, la batería y los eventos del inmovilizador sean visibles en la plataforma. El proceso normalmente incluye verificar la conectividad de red, ingresar el servidor y puerto correctos, seleccionar el transporte si el dispositivo lo requiere y validar que los reportes lleguen a Plaspy.

- Configure el dispositivo para enviar telemetría y ubicación a Plaspy usando los ajustes de servidor proporcionados
- Asegure la conectividad celular Cat M y la configuración opcional por SMS para la puesta a punto remota
- Establezca el transporte y puerto para que el rastreador pueda iniciar sesiones con Plaspy y ser detectado
- Valide que GPS, estado de batería y eventos de inmovilizador se reporten a los paneles de Plaspy
- Confirme la visibilidad en Plaspy y pruebe los controles remotos cuando aplique

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para el reporte desde el rastreador
- IP del servidor 54.85.159.138 como endpoint alternativo
- Puerto 8888 usado por todos los dispositivos en Plaspy
- Soporte de transporte: configure el rastreador para usar UDP o TCP en el puerto 8888 si el dispositivo solicita selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido

## Requisitos típicos antes de la configuración

- Una unidad LK710‑CatM alimentada y accesible con las conexiones necesarias realizadas
- Una SIM compatible con Cat M activa, con datos y SMS habilitados si se usa configuración por SMS
- Cobertura celular para redes Cat M en el lugar de la instalación
- Acceso al método de configuración del fabricante LK‑GPS, como comandos SMS o software del proveedor
- Una cuenta de Plaspy o información de aprovisionamiento para verificar la visibilidad del dispositivo después de la configuración
- Conocimiento del cableado del inmovilizador y prácticas de instalación seguras si se requiere corte remoto del motor

## Cómo se conecta este rastreador a Plaspy

El LK710‑CatM transmite actualizaciones de posición y estado a través de redes celulares Cat‑M al endpoint y puerto del servidor Plaspy, donde la plataforma ingiere los datos para su visualización en tiempo real, alertas y registros históricos. Plaspy recibe los reportes estándar del dispositivo y detecta el protocolo automáticamente, por lo que no es necesario especificar un tipo de protocolo más allá de la elección de transporte cuando sea requerido.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Use transporte UDP o TCP en el puerto 8888 si el rastreador solicita preferencia de protocolo
- Plaspy detecta automáticamente el protocolo del dispositivo una vez que se establece una sesión en el puerto compartido
- Ubicación, nivel de batería y eventos del inmovilizador se envían a Plaspy y aparecen en la plataforma
- La conexión exitosa hace que el dispositivo sea visible en los paneles de Plaspy y habilita alertas y monitoreo

## Flujo típico de configuración

1. Acceda al método oficial de configuración de LK‑GPS para el LK710‑CatM, como comandos SMS o el software del fabricante
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo
3. Configure el puerto 8888 como puerto de destino para telemetría y mensajes de control
4. Elija UDP o TCP si el dispositivo requiere seleccionar un transporte durante la configuración
5. Aplicar o guardar los ajustes en la herramienta del fabricante o enviar el comando SMS para almacenar los parámetros de red
6. Reinicie el dispositivo si el fabricante o el firmware lo requieren para activar los nuevos ajustes de servidor
7. Valide que el dispositivo reporta a Plaspy comprobando la visibilidad y la telemetría en la plataforma Plaspy

## Ejemplos de comandos de configuración

El LK‑GPS LK710‑CatM admite configuración por SMS y mediante la herramienta del proveedor, pero los comandos exactos y la sintaxis dependen del firmware del fabricante y de variantes regionales. Dado que los comandos SMS específicos del modelo y los comandos del software del proveedor varían, utilice la guía de configuración oficial de LK‑GPS o la herramienta del fabricante para introducir estos valores exactos:

- Dominio del servidor o IP a usar cuando se solicite d.plaspy.com o 54.85.159.138
- Puerto a ingresar cuando se solicite 8888
- Elección de transporte UDP o TCP si el dispositivo lo requiere

Consulte la documentación de LK‑GPS para las plantillas SMS precisas o los pasos en la herramienta de configuración necesarios para guardar estos valores en el dispositivo.

## Notas de configuración

- Las diferencias de firmware y las variantes de hardware regionales pueden cambiar la sintaxis de los comandos y las opciones de configuración disponibles; verifique el firmware del dispositivo antes de aplicar configuraciones masivas
- Los requisitos de conectividad Cat‑M y el perfil de la SIM varían según el operador y la región; confirme que la SIM soporta acceso a redes Cat‑M y datos más SMS si es necesario
- Elija UDP o TCP según la preferencia del instalador o la recomendación del fabricante; Plaspy detectará el protocolo automáticamente una vez que el dispositivo se conecte
- La plataforma Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica los ajustes de servidor en una flota mixta
- Para el cableado del inmovilizador y los pasos de instalación críticos para la seguridad, siga las guías de instalación y las mejores prácticas de LK‑GPS

## Por qué usar Plaspy con esta configuración

Usar el LK710‑CatM con Plaspy ofrece a los operadores una forma simple y unificada de recopilar ubicación y eventos en tiempo real desde rastreadores compactos y robustos. Los ajustes de servidor compartidos y la detección automática de protocolo en Plaspy simplifican la incorporación de dispositivos y reducen la complejidad de configuración por unidad, permitiendo que los equipos se concentren en el despliegue y los flujos operativos en lugar de los detalles de red por dispositivo.

To learn more about Plaspy and how it supports fleet visibility and device management visit https://www.plaspy.com. For the most current and device specific configuration commands, firmware notes, and installation guidance verify details with the LK GPS manufacturer documentation at https://www.lk-gps.com.
