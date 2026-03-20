---
slug: /gosafe/gtu60/configuration
id: gtu60-configuration
sidebar_label: Configuration
title: Gosafe - GTU60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gosafe GTU60 con ajustes de servidor Plaspy, flujo de instalación y consideraciones de integración
keywords:
  - configuración Gosafe GTU60
  - instalación Gosafe GTU60
  - Gosafe GTU60 en Plaspy
  - configuración rastreador Gosafe
  - configuración servidor GTU60
  - guía de instalación GTU60
  - configuración rastreador Plaspy
  - configuración rastreador vehicular
  - configuración rastreador GPS para flotas
  - instalación del Gosafe GTU60
---

# Gosafe - GTU60: Configuración

Esta página explica el contexto público de configuración para usar el Gosafe GTU60 con la plataforma Plaspy. Resume los ajustes de servidor de Plaspy que deberá aplicar en el dispositivo o en la herramienta de instalación, describe el flujo típico para que el GTU60 reporte a Plaspy y señala consideraciones prácticas basadas en las características del dispositivo GTU60.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos desde el lado del fabricante para el GTU60 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso esta guía se centra en los valores públicos de Plaspy y en directrices prácticas, recomendando verificar siempre con el fabricante del equipo.

## Resumen de la configuración

Este proceso prepara al GTU60 para enviar ubicación y telemetría a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. El objetivo es ingresar los datos del servidor de Plaspy, elegir el transporte y validar la conectividad para que el rastreador pueda reportar posiciones GNSS, eventos del acelerómetro y el estado de entradas y salidas (I/O) a Plaspy.

- Configure el GTU60 para que reporte al endpoint de Plaspy utilizando los ajustes de servidor públicos.
- Elija UDP o TCP como transporte si el dispositivo lo requiere y guarde la configuración.
- Valide la conectividad móvil y que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Confirme que el dispositivo aparezca en Plaspy y esté enviando las posiciones y telemetría esperadas.
- Use herramientas del fabricante o configuración por SMS, cuando estén disponibles, para aplicar los ajustes y reiniciar el rastreador.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com para reporte e ingestión de dispositivos
- IP del servidor: 54.85.159.138 como endpoint alterno
- Puerto: 8888, usado por Plaspy para todos los dispositivos soportados
- Transporte: soporte para UDP o TCP cuando el dispositivo exige selección de transporte
- Detección automática: Plaspy detecta el protocolo del rastreador automáticamente para dispositivos que usan feeds telemáticos estándar

## Requisitos habituales antes de la configuración

- Un GTU60 alimentado e instalado o conectado a una fuente de alimentación de banco con voltaje estable
- Una tarjeta SIM activa con datos móviles habilitados si va a usar LTE o 2G para reportes de datos
- Acceso al método oficial de configuración de Gosafe o al software instalador para el GTU60
- El número de serie del dispositivo o identificador único disponible para inventario y verificación
- Una cuenta o configuración organizacional en Plaspy lista para aceptar los reportes del dispositivo y validar su funcionamiento
- Herramientas básicas para guardar, aplicar ajustes y reiniciar el equipo tras la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GTU60 transmite posiciones GNSS, eventos del acelerómetro y estado de entradas y salidas al endpoint y puerto compartidos de Plaspy, permitiendo a los administradores de flota ver ubicación en tiempo real, alarmas y telemetría. El rastreador puede usar TCP para entrega confiable o UDP para reportes más ligeros, y Plaspy clasificará y analizará los mensajes entrantes de forma automática.

- El GTU60 reporta al endpoint compartido d.plaspy.com o a la IP del servidor 54.85.159.138
- Todo el tráfico del dispositivo se envía al puerto 8888, que es el puerto que Plaspy usa para los rastreadores compatibles
- Plaspy detecta automáticamente el protocolo del dispositivo e ingiere telemetría de GNSS, acelerómetro y I/O
- Los dispositivos pueden usar transporte TCP o UDP según la configuración y las condiciones de la red
- La configuración por SMS puede emplearse como alternativa cuando el firmware del dispositivo y los planes del operador lo soporten

## Flujo típico de configuración

1. Encienda el GTU60 y asegúrese de que la SIM esté activa y con datos habilitados.
2. Abra el método oficial de configuración de Gosafe o el software instalador correspondiente al GTU60.
3. Ingrese la información del servidor de Plaspy usando d.plaspy.com o la IP alternativa 54.85.159.138.
4. Configure el puerto del servidor en 8888, ya que es el puerto utilizado por Plaspy para todos los dispositivos.
5. Seleccione UDP o TCP como transporte si el GTU60 requiere elegir uno.
6. Aplique o guarde la configuración y siga los mensajes del fabricante para confirmar los cambios.
7. Reinicie el GTU60 si la herramienta o el firmware lo solicitan para activar los nuevos ajustes.
8. Verifique que el dispositivo esté reportando a Plaspy y aparezca en su interfaz con posiciones y telemetría correctas.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exactos para configurar el GTU60 dependen de la herramienta de Gosafe, la versión de firmware o el conjunto de comandos SMS que provea el fabricante. Los proveedores suelen ofrecer una utilidad de PC, una herramienta web o un conjunto de comandos SMS para ingresar dominio o IP del servidor, puerto y transporte. Para ejemplos concretos de comandos y la sintaxis precisa, consulte la documentación oficial de Gosafe o la herramienta del instalador proporcionada por su distribuidor.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos SMS y los campos disponibles en la herramienta de configuración; consulte siempre las notas de la versión específica.
- TCP proporciona un transporte orientado a sesión y más confiable, mientras que UDP ofrece menor sobrecarga; elija el transporte que se ajuste a su política de red y al soporte del firmware del dispositivo.
- La configuración por SMS puede ser una alternativa para establecer d.plaspy.com y el puerto 8888 cuando el acceso remoto o al vehículo sea necesario.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo entrante, por lo que normalmente solo necesita proporcionar el servidor y puerto correctos.
- Mantenga una copia del ID único del dispositivo y del registro de configuración para inventario y resolución de problemas posterior a la instalación.

## Por qué usar Plaspy con esta configuración

Usar el GTU60 con Plaspy ofrece una solución práctica para ubicación en tiempo real, telemetría y reporte de eventos en flotas comerciales ligeras, operaciones de renta y procesos de recuperación. El desempeño GNSS del GTU60, los reportes basados en acelerómetro y la detección de encendido (I/O) lo hacen apto para monitoreo de flotas y funciones antirrobo cuando el dispositivo está configurado para reportar a Plaspy.

Para obtener más información sobre Plaspy y cómo ingiere y muestra la telemetría de los dispositivos, visite https://www.plaspy.com. Para detalles específicos y actualizados sobre la configuración del dispositivo, comportamiento del firmware y comandos del fabricante, consulte la documentación oficial de Gosafe en https://gosafesystem.com/ ya que los métodos y características del firmware pueden cambiar con el tiempo.
