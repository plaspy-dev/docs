---
slug: /gator/m528/configuration
id: m528-configuration
sidebar_label: Configuration
title: Gator - M528 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Gator M528 con los ajustes de servidor Plaspy y ejemplos de SMS
keywords:
  - Configuración Gator M528
  - Instalación Gator M528
  - Gator M528 Plaspy
  - Configuración rastreador GPS Gator
  - Configuración servidor Plaspy
  - Configuración seguimiento de vehículos
  - Configuración rastreador GPRS
  - Configuración rastreador por SMS
  - Configuración seguimiento de flotas
  - Configuración plataforma Gator M528 GPS
---

# Gator - M528 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Gator M528 con la plataforma Plaspy. Se centra en los detalles prácticos a nivel de servidor y comandos que necesitará para apuntar un dispositivo M528 a Plaspy y validar la conectividad utilizando los ajustes públicos que emplea Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Gator M528 soporta métodos de configuración por SMS y GPRS; donde existan comandos SMS públicos se muestran a continuación como ejemplos que usted puede adaptar.

## Resumen de configuración

Este proceso prepara el Gator M528 para enviar datos de ubicación y eventos a Plaspy, configurando el equipo para que informe al endpoint y puerto del servidor Plaspy y verificando posteriormente que el dispositivo aparece en la plataforma.

- Configure el dispositivo para que apunte al dominio o IP del servidor Plaspy para que los datos fluyan hacia la plataforma.
- Elija el método de transporte que soporte el dispositivo (UDP o TCP) y establezca el puerto común usado por Plaspy.
- Use la sintaxis de comandos SMS del Gator M528 o la herramienta del fabricante para escribir los ajustes del servidor cuando no exista una herramienta de software directa.
- Valide la conectividad y confirme que el dispositivo informa a Plaspy para que sea visible en la monitorización.
- Conserve cualquier valor de autenticación del dispositivo, como la contraseña del equipo, al enviar comandos de configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Nota: Todos los dispositivos en Plaspy usan el mismo puerto, por lo que siempre deberá configurar el puerto 8888 para los dispositivos soportados

## Requisitos habituales antes de la configuración

- Una unidad Gator M528 con alimentación y accesible, instalada físicamente o disponible para pruebas.
- Una tarjeta SIM funcional con datos habilitados si usa reporte por GPRS, o con capacidad de SMS si va a configurar por mensajes de texto.
- Acceso al método oficial de configuración Gator, ya sea comandos SMS o la herramienta del proveedor.
- El ID del dispositivo y un número de teléfono de contacto del propietario del dispositivo si los comandos del fabricante lo requieren.
- Conocimiento del APN, usuario APN y contraseña APN requeridos por el operador móvil (cuando se use GPRS).

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el M528 envía sus datos de rastreo y mensajes de estado al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar actualizaciones de ubicación y alarmas.

- El rastreador informa al dominio o IP del servidor Plaspy (d.plaspy.com o 54.85.159.138) configurado en el dispositivo.
- Toda la comunicación se envía al puerto común de Plaspy 8888 para que la plataforma reciba mensajes de todos los dispositivos soportados.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y procesa los mensajes en consecuencia.
- Una vez que el reporte funciona, las actualizaciones de ubicación, alarmas y el estado del dispositivo son visibles en Plaspy para su monitorización y análisis.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Gator o al software proporcionado por el fabricante (comandos SMS o herramienta del proveedor).
2. Ingrese el endpoint del servidor: el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera el método de configuración.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto en todos los dispositivos).
4. Elija UDP o TCP en el dispositivo si la configuración requiere seleccionar un transporte.
5. Aplique o guarde la configuración en el dispositivo o envíe el comando SMS para escribir los ajustes.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio para activar los nuevos ajustes.
7. Verifique que el dispositivo informe a Plaspy y que aparezca en la vista de monitorización de la plataforma.

## Ejemplos de comandos de configuración

El Gator M528 soporta configuración mediante SMS. A continuación se muestran los formatos de comandos SMS públicos extraídos de ejemplos del fabricante. Reemplace los marcadores antes de enviar.

- Si su APN requiere usuario y contraseña use el comando extendido:
```text
SS,*[apn]*,*[apnu]*,*[apnp]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

- Si su APN no requiere usuario ni contraseña use el comando corto:
```text
S,*[apn]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Notas sobre los marcadores:
- [apn] — el APN de su operador móvil
- [apnu] — usuario del APN si es requerido
- [apnp] — contraseña del APN si es requerida
- {{DeviceID}} — el ID del dispositivo o IMEI según lo requiera el comando
- {{phoneNumberUser}} — un número de teléfono de contacto que se almacene o use en la configuración del dispositivo
- 123456 — ejemplo de contraseña de fábrica del dispositivo usada en el comando de muestra (cámbiela si su dispositivo tiene otra contraseña)

Estos mensajes SMS deben enviarse al número de la SIM instalada en el rastreador. Siga la documentación de Gator para el formato exacto de los SMS y los delimitadores que requiera su firmware regional.

## Notas de configuración

- La sintaxis exacta de los SMS y los campos requeridos pueden variar según la versión de firmware y las variantes regionales del equipo; confirme siempre el formato de comando para su dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; ambos transportes son aceptados por Plaspy y la plataforma detecta el protocolo automáticamente.
- Si usa GPRS, asegúrese de que el APN, el usuario y la contraseña sean correctos para su operador móvil antes de enviar los comandos de configuración del servidor.
- La configuración por SMS es conveniente para dispositivos remotos, pero confirme la entrega y la respuesta del rastreador tras enviar los comandos.
- Mantenga la contraseña del dispositivo segura y actualícela desde la predeterminada cuando corresponda siguiendo las recomendaciones del fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el Gator M528 para que informe a Plaspy proporciona visibilidad centralizada de vehículos y activos, permitiendo monitorear ubicación, alarmas y estado operativo desde una sola plataforma. Usar los ajustes compartidos del servidor Plaspy simplifica el despliegue porque se emplea el mismo puerto y endpoint para los dispositivos soportados y Plaspy se encarga de la detección automática del protocolo.

Learn more about Plaspy and how it can integrate with fleet devices at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup methods can change over time; verify the latest device-specific instructions and command formats with the manufacturer at http://en.gatorgroup.cn.
