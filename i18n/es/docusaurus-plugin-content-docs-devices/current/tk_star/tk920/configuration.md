---
slug: /tk_star/tk920/configuration
id: tk920-configuration
sidebar_label: Configuration
title: TK-Star - TK920 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star TK920 en Plaspy, con ajustes de servidor, comandos SMS y flujo para integrar el equipo
keywords:
  - configuración TK-Star TK920
  - configuración TK920
  - configuración de servidor TK-Star TK920
  - configuración TK920 Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración rastreador de flota
  - comandos SMS TK920
  - ajustes servidor Plaspy
  - configuración rastreador de activos
---

# TK-Star - Configuración TK920

Esta página documenta el contexto público de configuración para usar el TK-Star TK920 con Plaspy. Incluye los ajustes del servidor Plaspy que debe aplicar, el flujo típico de puesta en marcha y los comandos SMS públicos publicados por el fabricante para preparar el equipo y que reporte a Plaspy. Utilice esta guía para aprender a apuntar un TK920 a Plaspy y qué validar antes de comenzar el monitoreo en la plataforma.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, detectando automáticamente el protocolo del tracker para que los equipos funcionen sin necesidad de elegir manualmente el protocolo. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor; trate estos comandos como la referencia pública y confirme el comportamiento del equipo con la documentación oficial de TK-Star cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el TK920 para comunicarse con el endpoint de ingestión de Plaspy y garantiza que el dispositivo pueda enviar actualizaciones periódicas de posición y estado. El flujo típico consiste en configurar el APN, apuntar el equipo al servidor Plaspy, definir el intervalo de subida, activar el modo GPRS si es necesario y luego verificar que el dispositivo sea visible en su cuenta de Plaspy.

- Configure el APN de la red en el dispositivo para que pueda abrir una conexión de datos.
- Establezca el servidor GPRS del TK920 hacia el endpoint de Plaspy para que la telemetría se dirija a la plataforma.
- Defina un intervalo de reporte para controlar la frecuencia de envío de posiciones.
- Cambie el equipo al modo de datos (GPRS) y guarde los ajustes para que use la conexión celular.
- Valide la comunicación en Plaspy para confirmar que se reciben ubicación, movimiento y eventos de alarma.
- Envíe los ajustes mediante SMS o la herramienta de configuración del fabricante cuando esta exista.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported on port 8888
- Plaspy notes: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

Estos valores son la información pública del endpoint de Plaspy que debe usar al configurar el TK920 para que reporte a la plataforma.

## Requisitos típicos antes de la configuración

- Un TK920 con batería cargada y acceso a su interfaz de configuración por SMS o a la herramienta oficial de TK-Star.
- Una tarjeta SIM activa con datos habilitados y el APN correcto proporcionado por el operador móvil.
- La contraseña por defecto del dispositivo (usada en los comandos SMS) o acceso a la contraseña del equipo si fue cambiada.
- Acceso a una cuenta de Plaspy con capacidad para agregar y visualizar dispositivos y así validar los reportes.
- Capacidad básica para enviar comandos SMS desde un teléfono de gestión o usar la herramienta del fabricante indicada en el manual del equipo.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el TK920 envía la ubicación y el estado del equipo al endpoint y puerto del servidor Plaspy para que la plataforma ingiera la telemetría y permita el monitoreo en tiempo real, las alertas y el almacenamiento histórico de rutas. Plaspy recibe las actualizaciones de posición y los eventos, los presenta en paneles y dispara notificaciones según los eventos del dispositivo.

- El tracker reporta datos GNSS y de estado al endpoint de Plaspy en d.plaspy.com (54.85.159.138) en el puerto 8888.
- La telemetría y las alarmas del dispositivo se entregan a Plaspy, donde aparecen para su monitoreo y reportes.
- Los intervalos regulares de subida controlan la frecuencia con la que el TK920 envía posiciones a Plaspy.
- Eventos de alarma como movimiento, vibración o geocerca se reenvían a Plaspy para notificación inmediata.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que el dispositivo puede comunicarse por UDP o TCP sin seleccionar el protocolo manualmente en la plataforma.

## Flujo de configuración común

1. Acceda al método oficial de configuración de TK-Star o al software indicado en el manual del TK920 (comandos SMS o herramienta del vendedor).
2. Configure el APN del equipo para que coincida con el operador móvil usando el comando SMS o la herramienta de configuración.
3. Ingrese la información del servidor de Plaspy indicando d.plaspy.com o la IP 54.85.159.138 y configure el puerto 8888.
4. Elija UDP o TCP en el dispositivo si requiere selección explícita del transporte.
5. Defina el intervalo de subida deseado y aplique o guarde la configuración.
6. Reinicie el dispositivo si el equipo o la herramienta lo requieren para que los cambios surtan efecto.
7. Valide que el equipo reporte a Plaspy y que las actualizaciones de ubicación y eventos aparezcan en su cuenta.

## Comandos de configuración de ejemplo

El TK920 admite públicamente la configuración vía SMS. A continuación figuran los comandos SMS publicados por el fabricante en el orden recomendado para una configuración básica. La contraseña del dispositivo usada en cada comando es la predeterminada 123456. Si cambió la contraseña, reemplace 123456 por la contraseña actual.

- Optional initial factory reset (optional initial setup)
```text
begin123456
```

- Set operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set APN username if required by the operator (replace {{apnu}} with APN username)
```text
apnuser123456 {{apnu}}
```

- Set APN password if required by the operator (replace {{apnp}} with APN password)
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy by IP and port (this example uses the public Plaspy IP and port)
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds
```text
upload123456 60
```

- Switch the device to GPRS (data) mode
```text
gprs123456
```

Notas sobre los marcadores:
- {{apn}} — la cadena APN de su operador móvil (requerida para datos).
- {{apnu}} — nombre de usuario APN opcional si el operador lo solicita.
- {{apnp}} — contraseña APN opcional si el operador la solicita.
- Reemplace 123456 por la contraseña del dispositivo si fue cambiada desde el valor de fábrica.

Si su instalación o una versión posterior de firmware admite el uso de nombres de dominio, puede indicar d.plaspy.com en lugar de la IP cuando el equipo acepte un nombre de dominio. Los comandos de ejemplo anteriores son los publicados por el fabricante y deben enviarse en el orden indicado cuando se siga la guía del proveedor.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; siempre verifique las notas de la versión del firmware de su equipo.
- Algunos operadores requieren usuario y contraseña de APN; incluya los comandos apnuser y apnpasswd solo cuando sea necesario.
- Elija UDP o TCP según la preferencia del instalador o el comportamiento del equipo; Plaspy soporta ambos y detectará el protocolo automáticamente.
- La configuración por SMS es comúnmente soportada; confirme que está enviando los comandos al número correcto del dispositivo y que el control por SMS está habilitado.
- Tras aplicar los ajustes, espere un breve lapso para que el dispositivo se registre en la red y comience a reportar; verifique en Plaspy los mensajes iniciales de ubicación y estado.

## Por qué usar Plaspy con esta configuración

Usar el TK-Star TK920 con Plaspy ofrece una ruta directa a un rastreo remoto confiable, gestión eficiente de batería y reporte consolidado de eventos. Apuntar el equipo a Plaspy asegura que las actualizaciones de ubicación, alarmas por movimiento y otras señales de estado sean visibles en una plataforma centralizada para equipos de operaciones, seguridad o gestión de flota.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los comandos de configuración específicos más recientes, el comportamiento de firmware y los detalles del fabricante, verifique la información actual en el sitio de TK-Star https://www.tk-star.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
