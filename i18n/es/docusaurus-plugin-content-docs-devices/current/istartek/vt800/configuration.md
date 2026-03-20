---
slug: /istartek/vt800/configuration
id: vt800-configuration
sidebar_label: Configuration
title: iStartek - VT800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador iStartek VT800 con el servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración iStartek VT800
  - instalación iStartek VT800
  - configuración servidor VT800
  - configuración VT800 Plaspy
  - configuración rastreador GPS iStartek
  - comandos SMS VT800
  - configuración seguimiento vehicular VT800
  - ajustes GPRS VT800
  - integración rastreadores Plaspy
  - gestión de flotas VT800
---

# iStartek - Configuración del VT800

Esta página documenta el contexto público de configuración para utilizar el rastreador iStartek VT800 con Plaspy. Se centra en los ajustes prácticos del servidor y los pasos observables que puede aplicar para que el VT800 envíe datos de posición y estado a la plataforma Plaspy. Cuando están disponibles, se incluyen ejemplos de comandos SMS basados en la guía del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT800 admite configuración por SMS y reporte por GPRS, por lo que esta guía combina los requisitos del servidor Plaspy con los comandos públicos y el flujo de trabajo del VT800.

## Resumen de la configuración

El objetivo de este proceso es preparar el VT800 para comunicarse de forma fiable con el servidor Plaspy, de modo que las ubicaciones y eventos del dispositivo aparezcan en su cuenta de Plaspy. La configuración normalmente incluye establecer el APN para datos móviles, apuntar el dispositivo al endpoint y puerto del servidor, elegir el transporte si es necesario y validar los reportes tras el reinicio.

- Definir el APN del operador móvil y las credenciales para que el rastreador use GPRS o 4G
- Apuntar el dispositivo al endpoint del servidor Plaspy y confirmar el puerto correcto
- Seleccionar UDP o TCP en el tracker si se solicita y guardar la configuración
- Verificar el intervalo de reporte y el comportamiento de buffering para asegurar la llegada de datos a Plaspy
- Confirmar que el dispositivo aparece en Plaspy tras la configuración y revisar las actualizaciones en tiempo real

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Requisitos habituales antes de iniciar

- Un VT800 alimentado y con acceso físico para configurar y reiniciar el equipo
- Una tarjeta SIM activa con datos móviles y el APN correcto para su operador
- Capacidad para enviar SMS al rastreador o acceso a la herramienta de configuración del fabricante
- El APN, nombre de usuario y contraseña del APN proporcionados por su operador si son requeridos
- Acceso a una cuenta Plaspy o una forma de verificar que el dispositivo aparece en la plataforma
- Conocimiento de la versión de firmware del equipo, ya que comandos y comportamientos pueden variar

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el VT800 envía datos de ubicación y del dispositivo al endpoint y puerto del servidor Plaspy. Plaspy recibe esos paquetes, reconoce automáticamente el protocolo del rastreador y muestra la posición y el estado del dispositivo en la plataforma. El VT800 admite almacenamiento en memoria interna cuando la conexión GPRS o celular no está disponible, permitiendo la subida posterior cuando se restablece la conectividad.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El dispositivo puede usar transporte UDP o TCP para enviar paquetes a Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no suele ser necesario seleccionar el protocolo manualmente en la plataforma
- Los datos almacenados en buffer en el VT800 se cargan cuando el dispositivo recupera conectividad
- La configuración de servidores duales en el VT800 permite definir destino primario y secundario para la subida

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de iStartek, como comandos SMS o la herramienta del proveedor para el VT800
2. Ingrese el endpoint del servidor Plaspy configurando d.plaspy.com o la IP 54.85.159.138 como servidor del dispositivo
3. Establezca el puerto del servidor en 8888, que es el puerto usado por Plaspy para todos los dispositivos compatibles
4. Seleccione UDP o TCP en el rastreador si el equipo solicita elegir el transporte
5. Configure el APN y las credenciales del APN requeridas por su operador móvil
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige
7. Verifique que el rastreador reporte a Plaspy y que posiciones y eventos aparezcan en su cuenta

## Comandos de configuración de ejemplo

El VT800 admite configuración por SMS. Los siguientes comandos públicos son los que el fabricante suele facilitar para tareas comunes de configuración. Mantenga los marcadores de posición y reemplace con los valores de su operador cuando sea necesario.

1. Paso inicial opcional para restablecer a valores de fábrica
```text
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Establecer el APN del operador
```text
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/if}}#
```
- Explicación de los marcadores de posición
  - [apn] es el nombre del APN del operador móvil necesario para el acceso de datos
  - [apnu] es el nombre de usuario del APN cuando el operador lo requiere
  - [apnp] es la contraseña del APN cuando el operador lo requiere
  - Si su operador no requiere usuario ni contraseña, omita los campos adicionales

4. Configurar el servidor GPRS para usar el dominio y puerto de Plaspy
```text
SERVER,1,d.plaspy.com,8888#
```

5. Entrada alternativa de servidor usando la IP del servidor Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

6. Establecer intervalo de actualización para reportar cada 60 segundos
```text
TIMER,60#
```

7. Consultar parámetros actuales
```text
PARAM#
```

Nota: El orden mostrado sigue la guía del fabricante, donde normalmente se configuran el servidor y el APN antes de habilitar el reporte regular. Use el comando de restablecimiento de fábrica únicamente cuando empiece desde un estado conocido o cuando sea necesario.

## Observaciones sobre la configuración

- El VT800 soporta configuración por SMS como se muestra, pero algunas instalaciones usan software del proveedor o herramientas de instalador; siga el método apropiado para su entorno
- Revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; confirme los comandos específicos para la versión de su equipo
- Elija UDP o TCP según las necesidades de red e integración; Plaspy acepta ambos transportes en el puerto 8888
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que generalmente no se requiere configuración de protocolo en la plataforma
- Al usar marcadores como [apn], proporcione únicamente los valores exigidos por su operador y verifique la conectividad antes de depender del seguimiento en vivo

## Por qué usar Plaspy con esta configuración

Configurar el VT800 para reportar a Plaspy brinda a las organizaciones visibilidad centralizada y monitoreo operativo de vehículos y activos. Con Plaspy recibiendo datos de posición y eventos a través del endpoint y puerto compartidos, las organizaciones pueden rastrear movimientos, analizar comportamiento de la flota e integrar los reportes de los dispositivos en sus operaciones.

Para obtener más información sobre Plaspy e integración de rastreadores compatibles, visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y documentación del fabricante del VT800, consulte los recursos oficiales de iStartek en https://istartek.com/
