---
slug: /thingsys/ts_g17ms/configuration
id: ts_g17ms-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17Ms Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el ThingSys TS-G17Ms con Plaspy mediante servidor compartido, SMS o GPRS
keywords:
  - Configuración ThingSys TS-G17Ms
  - Instalación ThingSys TS-G17Ms
  - Configuración TS-G17Ms Plaspy
  - Configuración servidor TS-G17Ms
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS ThingSys
  - Rastreo vehicular TS-G17Ms
  - Configuración rastreador GPRS
  - Configuración rastreador por SMS
  - Rastreo de flotas Plaspy
---

# ThingSys - TS-G17Ms Configuración

Esta página ofrece la información pública necesaria para configurar el rastreador ThingSys TS-G17Ms con Plaspy. Reúne las indicaciones prácticas disponibles públicamente para apuntar el dispositivo al servidor de Plaspy y validar que la unidad envía ubicación y eventos a la plataforma. Cuando la documentación pública del fabricante incluye comandos SMS o GPRS, los mostramos aquí como referencia.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para preparar el TS-G17Ms para Plaspy y verifique siempre el comportamiento específico del dispositivo con la documentación oficial de ThingSys cuando sea necesario.

## Resumen de configuración

El proceso de configuración prepara al TS-G17Ms para comunicarse de forma fiable con Plaspy por GPRS o SMS y para que Plaspy muestre ubicación, alarmas y telemetría básica. Normalmente la configuración incluye ajustar el APN de la SIM instalada, definir el endpoint y puerto del servidor Plaspy y validar que el rastreador reporte correctamente.

- Configure el rastreador para que reporte al endpoint de Plaspy d.plaspy.com y al IP del servidor Plaspy 54.85.159.138 en el puerto 8888.
- Ajuste el APN del dispositivo, el usuario APN y la contraseña APN requeridos por su operador móvil.
- Seleccione el tipo de transporte si el equipo solicita elegir entre UDP y TCP.
- Valide la conectividad comprobando el estado del dispositivo y confirmando que aparezca en Plaspy.
- Opcionalmente realice un reinicio de fábrica o una secuencia inicial antes de aplicar nuevos ajustes cuando sea recomendable.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos soportados

## Requisitos típicos antes de configurar

- Una tarjeta SIM válida con plan de datos y capacidad de SMS instalada en el rastreador y que pueda usar el APN del operador.
- Fuente de alimentación o conexión al vehículo que suministre el voltaje requerido por el TS-G17Ms.
- Acceso al método oficial de configuración de ThingSys, como comandos SMS o la herramienta del proveedor.
- La contraseña por defecto del dispositivo cuando aplique (la contraseña predeterminada pública en esta guía es 123456).
- Conocimiento del APN del operador, usuario APN y contraseña APN necesarios para el registro de datos móviles.
- Capacidad para enviar comandos SMS desde un número autorizado si utiliza configuración vía SMS.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TS-G17Ms envía datos de posición y eventos al endpoint y puerto compartidos de Plaspy para que los gestores de flota puedan ver estado, alarmas e historial de ubicación. Plaspy recibe los datos del rastreador y los asigna al dispositivo correcto en la plataforma mediante detección automática de protocolo.

- El rastreador se configura para enviar trazas GPRS a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El equipo también puede responder a peticiones de posición bajo demanda por SMS cuando se utiliza este método.
- Alarmas como SOS, exceso de velocidad, vibración y cambios de estado de ACC se envían y se muestran en los tableros de Plaspy.
- Plaspy procesa los mensajes de telemetría y eventos, permitiendo monitorización operativa y alertas.
- La elección entre UDP o TCP afecta la forma de comunicación; Plaspy soporta ambos y detecta el protocolo automáticamente.

## Flujo común de configuración

1. Acceda al método oficial de configuración de ThingSys o al software suministrado, como la interfaz de comandos SMS o la herramienta del proveedor para el TS-G17Ms.
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o directamente como la IP 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, requerido por Plaspy para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el equipo le pide elegir el tipo de transporte para el reporte al servidor.
5. Configure el APN del operador, el usuario APN y la contraseña APN para que el dispositivo pueda registrarse en la red móvil.
6. Aplique o guarde la configuración y reinicie el equipo si el rastreador o la herramienta del proveedor lo indican.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en línea y observando los primeros mensajes de ubicación o latidos en la plataforma.

## Ejemplos de comandos de configuración

El TS-G17Ms soporta configuración vía SMS. Los siguientes comandos públicos se presentan en el orden que ThingSys publica. Envíe los comandos desde un número autorizado e incluya la contraseña del dispositivo si se solicita. La contraseña por defecto indicada en materiales públicos es 123456.

1. Reinicio de fábrica opcional (solo si necesita borrar ajustes existentes)
```text
FORMAT
```

2. Ajustar el APN del operador (reemplace [apn] por el APN de su operador)
```text
apn123456 [apn]
```

3. Ajustar el usuario APN (reemplace [apnu] por el usuario APN; dejar en blanco si no aplica)
```text
apnuser123456 [apnu]
```

4. Ajustar la contraseña APN (reemplace [apnp] por la contraseña APN; dejar en blanco si no aplica)
```text
apnpasswd123456 [apnp]
```

5. Configurar el servidor GPRS para apuntar a Plaspy. Este ejemplo usa la IP pública y el puerto de Plaspy
```text
ip54.85.159.138 8888
```

6. Consultar los ajustes actuales del dispositivo
```text
CXZT
```

Notas sobre los marcadores de posición
- [apn] es la cadena APN del operador móvil requerida para conectividad de datos.
- [apnu] es el usuario APN si su operador lo requiere.
- [apnp] es la contraseña APN si su operador lo requiere.
- Mantenga el orden anterior cuando siga una secuencia de configuración inicial y ejecute un reinicio de fábrica solo si es estrictamente necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; consulte siempre la documentación de ThingSys para la versión de firmware de su dispositivo.
- El TS-G17Ms soporta tanto configuración por SMS como por GPRS según la guía pública; elija el método que mejor se adapte a su instalación y a sus requisitos de seguridad.
- Cuando el dispositivo lo permita, TCP y UDP están soportados; seleccione el transporte compatible con su entorno de red. Plaspy ofrece detección automática por su parte.
- Después de la configuración inicial, considere cambiar las contraseñas por defecto y verificar los números autorizados para evitar configuraciones no autorizadas.
- Confirme los valores APN y los requisitos del operador antes de enviar comandos; ajustes incorrectos del APN impiden el reporte por GPRS.

## Por qué usar Plaspy con esta configuración

Usar el TS-G17Ms con Plaspy permite a las organizaciones consolidar ubicación en tiempo real, alarmas y telemetría básica en una plataforma única para gestión de flotas, respuesta antirobo y vigilancia operativa. El flujo de configuración pública se centra en preparar el dispositivo para un reporte GPRS confiable hacia Plaspy y validar la visibilidad en la plataforma, de modo que pueda reaccionar ante eventos como alertas SOS, cambios de ignición y excesos de velocidad.

Para más información sobre Plaspy y cómo procesa los datos de los rastreadores visite https://www.plaspy.com. Para comandos específicos de dispositivo, notas de firmware y guía de instalación actualizada del TS-G17Ms, verifique la información vigente en el sitio del fabricante https://www.thingsys.com/
