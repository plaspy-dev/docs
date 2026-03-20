---
slug: /calmamp/lmu_800/configuration
id: lmu_800-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para CalmAmp LMU-800 y ajustes de servidor Plaspy para rastreo vehicular confiable
keywords:
  - Configuración CalmAmp LMU-800
  - Instalación CalmAmp LMU-800
  - Configuración LMU-800 Plaspy
  - Configuración rastreador GPS CalmAmp
  - Configuración servidor LMU-800
  - Configuración LMU-800 para Plaspy
  - Instalación rastreador vehicular CalmAmp
  - Guía de instalación LMU-800
  - Rastreo de flotas LMU-800
  - Compatibilidad rastreador GPS Plaspy
---

# CalmAmp - Configuración del LMU-800

Esta página describe el contexto público de configuración para usar el rastreador CalmAmp LMU-800 con Plaspy. Explica los ajustes compartidos de servidor que debe aplicar para que el dispositivo reporte a Plaspy y resume los pasos prácticos y comandos SMS publicados públicamente para una configuración básica. El LMU-800 es un dispositivo compacto para rastreo vehicular con batería de respaldo, detección de movimiento y eventos programables a bordo, lo que lo hace adecuado para casos de uso automotriz y de servicios que requieren resiliencia ante pérdida de energía.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El LMU-800 admite configuración por SMS en muchas instalaciones y también puede aceptar métodos de configuración OTA que provean los vendedores, por lo que confirme qué método aplica a su unidad antes de modificar ajustes en producción.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el LMU-800 para que se comunique de forma fiable con Plaspy y así la ubicación y los eventos del dispositivo sean visibles en la plataforma de flotas. Esto normalmente implica aplicar credenciales de red, apuntar el dispositivo al endpoint de Plaspy, seleccionar un transporte si el equipo lo requiere y validar la conectividad.

- Configure los ajustes de red del dispositivo, como el APN y credenciales, para que GPRS pueda conectarse.
- Establezca el servidor GPRS del equipo al endpoint de Plaspy para que reporte a la plataforma.
- Confirme que el puerto del servidor y el modo de transporte coincidan con los requisitos de Plaspy.
- Reinicie o aplique los cambios y valide que el dispositivo aparezca en Plaspy.
- Use comandos o herramientas de verificación proporcionadas por el fabricante para inspeccionar los ajustes aplicados.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma aceptará el formato de datos del dispositivo sin selección manual de protocolo en el servidor

## Requisitos típicos antes de la configuración

- Un LMU-800 con batería cargada o alimentación, con una SIM activa que soporte datos GPRS y SMS si va a usar configuración por SMS.
- Acceso al identificador del dispositivo que devuelve el equipo LMU para que los comandos SMS apunten a la unidad correcta; el LMU responde con un MID cuando se consulta.
- Datos APN del operador móvil, incluyendo el nombre APN y opcionalmente usuario y contraseña.
- Un método para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración OTA del fabricante si está disponible.
- Consola o teléfono para recibir respuestas SMS y confirmar los mensajes de éxito del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El LMU-800 se configura para enviar su telemetría y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo pueda establecer una sesión GPRS y alcanzar el endpoint de Plaspy, la plataforma ingerirá los datos del rastreador, detectará automáticamente el protocolo y hará visible el equipo en la plataforma para monitoreo y gestión de eventos.

- El dispositivo usa GPRS para conectarse a la IP o dominio del servidor configurado.
- Mensajes de telemetría y eventos se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta transporte UDP o TCP desde el equipo y detecta el protocolo automáticamente.
- Eventos del dispositivo y actualizaciones de ubicación estarán disponibles en Plaspy para monitoreo operacional e informes.
- Reinicios o cambios de configuración se usan para aplicar nuevos ajustes de servidor y restablecer la conectividad.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante para su LMU-800, ya sea por comandos SMS, el sistema OTA del proveedor o la herramienta de configuración del vendedor según lo provea el instalador.
2. Si configura por SMS para GPRS, obtenga el MID o ID del dispositivo enviando el comando de consulta del fabricante para recuperar el identificador de la unidad.
3. Ingrese el endpoint del servidor Plaspy estableciendo el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto del servidor en 8888 y elija UDP o TCP si el equipo exige una selección de transporte.
5. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el flujo de trabajo lo requieren.
6. Valide que el dispositivo reporte a Plaspy verificando el estado con el comando de verificación del fabricante y confirmando la visibilidad en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El LMU-800 puede configurarse usando comandos SMS. Los siguientes comandos públicos se presentan en el orden recomendado para la configuración inicial. El ID del dispositivo es el MID de 10 dígitos que devuelve el equipo en respuesta al comando de consulta del fabricante. Preserve los marcadores de posición mostrados y reemplácelos con sus valores de operador según sea necesario.

- Recuperar MID o identificador del dispositivo
```text
!R0
```
Envíe este comando para consultar el equipo y recibir el MID o ID de unidad que identifica al rastreador para la configuración SMS posterior.

- Establecer el APN del operador
```text
!RP,2306,0,{{apn}}
```
Reemplace {{apn}} con el nombre APN de su operador móvil.

- Establecer el nombre de usuario del APN (si es requerido)
```text
!RP,2314,0,{{apnu}}
```
Reemplace {{apnu}} con el usuario del APN si su operador lo solicita. Este comando es opcional si no se requiere usuario.

- Establecer la contraseña del APN (si es requerida)
```text
!RP,2315,0,{{apnp}}
```
Reemplace {{apnp}} con la contraseña del APN si corresponde. Es opcional según la configuración del operador.

- Establecer la IP del servidor GPRS a Plaspy
```text
!RP,2319,0,54.85.159.138
```
Esto apunta el dispositivo a la IP del servidor Plaspy. Alternativamente puede usar d.plaspy.com según el soporte del equipo.

- Establecer el puerto del servidor a Plaspy
```text
!RP,769,0,8888
```
Esto configura el equipo para usar el puerto 8888, que es el puerto compartido de Plaspy para todos los dispositivos.

- Reiniciar el rastreador para aplicar los ajustes
```text
!R3,70,0
```
Normalmente se requiere un reinicio para aplicar los nuevos ajustes de red y servidor. Use esto después de guardar la configuración.

- Verificar los ajustes aplicados
```text
!RO
```
Este comando de verificación devuelve la configuración actual para que pueda confirmar los valores de APN, servidor y puerto.

Notas sobre los marcadores de posición
- {{apn}} es el nombre APN del operador necesario para la conectividad de datos.
- {{apnu}} y {{apnp}} son opcionales y se usan solo si su operador móvil requiere usuario y contraseña del APN.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la disponibilidad de comandos y la sintaxis exacta, así que confirme el soporte de comandos para su versión de firmware del LMU-800.
- Muchas implementaciones usan SMS para la configuración inicial, pero CalAmp PULS o las herramientas OTA del proveedor pueden ser el método recomendado para despliegues masivos y la gestión remota.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de red; Plaspy acepta ambos y detectará el protocolo.
- Siempre confirme las credenciales APN con el operador móvil antes de aplicarlas al dispositivo.
- Si se requiere reinicio para aplicar ajustes, use el comando de reinicio proporcionado o siga el procedimiento de reinicio recomendado por el proveedor.

## Por qué usar Plaspy con esta configuración

Usar el LMU-800 con Plaspy proporciona a las organizaciones una forma sencilla de centralizar el rastreo vehicular, recibir alertas de eventos y monitorear el estado de los dispositivos en una sola plataforma. El LMU-800 aporta capacidades de dispositivo necesarias para un rastreo resiliente, mientras que Plaspy ofrece un endpoint de servidor consistente y detección automática de protocolo para integrar dispositivos con la mínima configuración por unidad.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la documentación específica de dispositivos y notas de firmware más recientes en el sitio del fabricante http://www.calamp.com/ para verificar los métodos de configuración actuales y el soporte de comandos.
