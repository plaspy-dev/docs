---
slug: /gator/m588s/configuration
id: m588s-configuration
sidebar_label: Configuration
title: Gator - M588S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Gator M588S y conectarlo a Plaspy con servidor compartido y comandos SMS
keywords:
  - configuración Gator M588S
  - instalación Gator M588S
  - Gator M588S Plaspy
  - configuración rastreador GPS Gator
  - configuración servidor M588S
  - configuración SMS rastreador GPS
  - configuración seguimiento vehicular
  - configuración rastreador gestión de flotas
  - configuración servidor Plaspy
  - configuración seguimiento Gator M588S
---

# Gator - M588S — Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Gator M588S con la plataforma Plaspy. Se centra en los ajustes y comandos visibles públicamente que preparan el dispositivo para reportar datos a Plaspy, e incluye ejemplos de comandos por SMS comúnmente publicados para este modelo.

Plaspy utiliza ajustes de servidor compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas proporcionadas por el proveedor. Use esta guía para comprender los valores de servidor y el flujo de trabajo necesarios; confirme siempre los detalles específicos del dispositivo con la documentación oficial de Gator.

## Resumen de la configuración

El objetivo del proceso de configuración es direccionar el M588S al servidor de Plaspy para que el dispositivo envíe ubicaciones y eventos a la plataforma y aparezca en su cuenta de Plaspy. En muchas instalaciones el M588S puede configurarse mediante comandos SMS enviados desde un número autorizado usando la contraseña por defecto del dispositivo.

- Configure el rastreador para que reporte al endpoint y puerto compartidos de Plaspy.
- Proporcione el APN y las credenciales del APN si son necesarias para que el dispositivo abra conexiones de datos GPRS (cuando aplique).
- Valide la selección de transporte (UDP o TCP) y guarde la configuración en el dispositivo.
- Confirme que el dispositivo aparece en Plaspy y está reportando ubicación y estado.
- Use SMS o la herramienta del fabricante según corresponda para aplicar y verificar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos previos a la configuración

- Un dispositivo Gator M588S instalado y con alimentación según las instrucciones del fabricante.
- Una tarjeta SIM activa con plan de datos y capacidad de SMS si va a configurar mediante SMS.
- La contraseña por defecto del dispositivo para configuración por SMS; en ejemplos públicos de este modelo aparece 123456 como contraseña por defecto.
- Acceso al método de configuración oficial de Gator, como comandos SMS o el software de configuración del proveedor.
- Conocimiento del APN correcto de su red móvil y, si procede, el usuario y la contraseña del APN.
- Un número telefónico autorizado para enviar los SMS de configuración al rastreador.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el M588S envía sus actualizaciones de ubicación y estado al endpoint y puerto compartidos de Plaspy para que la unidad pueda gestionarse y monitorizarse dentro de la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en la plataforma.

- El rastreador reporta posición GPS y eventos del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las opciones del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los ajustes estándar del servidor son suficientes.
- Una configuración exitosa permite visibilidad en Plaspy para ubicación en tiempo real, alertas y monitoreo de estado.
- La verificación se realiza comprobando que el dispositivo aparece y se actualiza en la plataforma Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Gator o al software correspondiente (comandos SMS, herramienta del fabricante o interfaz de instalador).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en el dispositivo según el procedimiento del fabricante.
6. Reinicie o corte la alimentación del dispositivo si el firmware necesita un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporta a Plaspy confirmando que la unidad aparece y se actualiza en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El Gator M588S se suele configurar por SMS. Los ejemplos públicos de comandos abajo usan la contraseña por defecto 123456 e incluyen marcadores que debe reemplazar:

- [apn] = el APN de su operador móvil
- [apnu] = usuario del APN si es requerido (opcional)
- [apnp] = contraseña del APN si es requerida (opcional)
- {{DeviceID}} = el identificador del dispositivo o IMEI usado por el rastreador
- {{phoneNumberUser}} = su número de teléfono para SOS o monitoreo según la sintaxis del comando

Si su APN requiere usuario y contraseña, envíe el siguiente SMS (conserve la secuencia y las comas tal como exige el dispositivo):

```text
SS,*[apn]*,*[apnu]*,*[apnp]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Si su APN no requiere usuario ni contraseña, use esta variante más corta:

```text
S,*[apn]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Notas sobre estos comandos:
- Reemplace cada marcador (por ejemplo [apn]) con el valor real de su SIM/red y del dispositivo.
- El último valor en ambos comandos es la contraseña del dispositivo; la guía pública para este modelo muestra 123456 como contraseña por defecto.
- Envíe los comandos SMS desde un número autorizado y espere el SMS de confirmación del dispositivo si el firmware lo proporciona.
- Si el dispositivo confirma los nuevos ajustes de servidor, proceda a cortar la alimentación o reiniciarlo si es necesario.

## Notas de configuración

- Las diferencias de firmware y de idioma entre las versiones regionales del dispositivo pueden cambiar la sintaxis de los comandos y las respuestas; confirme siempre los formatos exactos en el manual del fabricante.
- El M588S admite opciones de transporte UDP y TCP; elija el tipo de transporte requerido por su instalación y operador, y configúrelo en el dispositivo si es necesario.
- La configuración por SMS está documentada comúnmente para este modelo, pero algunos instaladores prefieren el software de configuración del fabricante o una herramienta de instalador cuando esté disponible.
- El manejo de credenciales APN varía según el operador; incluya usuario y contraseña del APN solo cuando su red los requiera.
- Si el dispositivo no responde a la configuración por SMS, verifique el estado de la SIM, el saldo de SMS y que el número remitente esté autorizado.

## Por qué usar Plaspy con esta configuración

Configurar el Gator M588S para que reporte a Plaspy ofrece visibilidad centralizada y control operativo para el seguimiento de vehículos y la gestión de flotas. Al apuntar el dispositivo al endpoint y puerto compartidos de Plaspy, habilita el reporte continuo en la plataforma Plaspy donde se pueden monitorizar y gestionar ubicaciones, alertas y estados.

Para conocer más sobre Plaspy y los servicios ofrecidos, visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Gator http://en.gatorgroup.cn ya que las especificaciones y los procedimientos de instalación pueden cambiar con el tiempo.
