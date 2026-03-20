---
slug: /calmamp/lmu_700/configuration
id: lmu_700-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador CalmAmp LMU 700 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración CalmAmp LMU 700
  - Configuración inicial CalmAmp LMU 700
  - Configuración del servidor LMU 700
  - Configuración LMU 700 Plaspy
  - Configuración rastreador CalmAmp
  - Configuración de rastreador vehicular
  - Configuración SMS LMU 700
  - Ajustes APN LMU 700
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
---

# CalmAmp - LMU-700 Configuración

Esta página detalla el contexto público de configuración para usar el rastreador CalmAmp LMU-700 con la plataforma Plaspy. Resume los ajustes prácticos del servidor, los prerequisitos habituales y ejemplos de comandos SMS públicamente disponibles para preparar el LMU-700 y que se comunique con Plaspy. Use esta guía para entender los pasos previos antes de añadir el dispositivo a Plaspy y para ver los valores exactos del servidor Plaspy que deben aplicarse.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y el flujo de trabajo aquí como orientación pública práctica y no como sustituto de la documentación oficial de CalmAmp.

## Resumen de configuración

El proceso de configuración prepara al LMU-700 para establecer transporte de datos fiable hacia Plaspy y habilita la visibilidad de la unidad en la plataforma. Para el LMU-700 esto suele incluir ajustes de APN y servidor GPRS y puede ejecutarse vía comandos SMS o con las herramientas de provisión del fabricante.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que haya conectividad de datos móviles.
- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría se entregue a la plataforma.
- Asegúrese de que el dispositivo use el puerto de Plaspy y seleccione UDP o TCP según sea necesario.
- Reinicie o reinicie el rastreador para que los nuevos ajustes entren en vigor y se reporten a Plaspy.
- Valide la conectividad verificando los ajustes del equipo y confirmando que informa a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores corresponden a la información pública del endpoint de Plaspy y deben utilizarse al configurar los campos de servidor y puerto del LMU-700.

## Requisitos previos típicos

- Una unidad LMU-700 alimentada y accesible, instalada o en un banco de pruebas seguro.
- Una SIM celular operativa con datos habilitados y capacidad de SMS para configuración vía SMS.
- Capacidad para enviar comandos SMS al dispositivo si utiliza el método de configuración por SMS que se muestra abajo.
- El valor MID o ID del dispositivo devuelto por el comando de consulta del fabricante para incluir donde sea necesario.
- Acceso a herramientas o documentación de CalmAmp si prefiere provisión con software del fabricante o métodos OTA.
- Confirmación de la versión de firmware del dispositivo al solucionar diferencias en el comportamiento de los comandos.

## Cómo se conecta este rastreador a Plaspy

El LMU-700 se configura para enviar sus mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar la telemetría en su cuenta. Plaspy recibe conexiones en el mismo puerto para todos los dispositivos soportados y usa detección de protocolo para analizar los mensajes entrantes.

- El dispositivo envía mensajes por GPRS o transporte celular a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede elegir UDP o TCP como transporte si el rastreador requiere una selección explícita.
- Plaspy identifica automáticamente el protocolo del rastreador, por lo que el mismo puerto puede reutilizarse para distintos modelos.
- Una vez conectado, el rastreador reporta eventos y estado para que Plaspy muestre ubicación, movimiento y alertas.
- La validación de conectividad confirma que el rastreador es visible en Plaspy y que está reportando según lo esperado.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración CalmAmp, o prepárese para enviar comandos SMS al dispositivo según lo permita su firmware LMU-700.
2. Identifique el ID del dispositivo emitiendo el comando de consulta del fabricante (por ejemplo el comando !R0) y anote el valor MID devuelto.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
4. Configure el puerto del servidor a 8888 y seleccione UDP o TCP si el dispositivo requiere la selección del transporte.
5. Configure el APN del dispositivo y, opcionalmente, el nombre de usuario y la contraseña del APN para que el rastreador tenga acceso a datos móviles.
6. Aplique o guarde la configuración y reinicie o reinicie el dispositivo cuando sea necesario para que los cambios surtan efecto.
7. Valide que el dispositivo informa a Plaspy comprobando los ajustes del equipo y confirmando su presencia y telemetría en la plataforma.

## Ejemplos de comandos de configuración

El LMU-700 puede configurarse mediante comandos SMS. El ID del dispositivo usado en los comandos es el MID de 10 dígitos devuelto por el comando de consulta del fabricante !R0. Conserve los marcadores de posición para sus valores de red al emitir los comandos.

- Establecer el APN del operador
  ```
  !RP,2306,0,{{apn}}
  ```
  Reemplace {{apn}} por la cadena APN de su operador móvil.

- Establecer el nombre de usuario del APN (opcional)
  ```
  !RP,2314,0,{{apnu}}
  ```
  Reemplace {{apnu}} por el usuario del APN si su operador lo requiere.

- Establecer la contraseña del APN (opcional)
  ```
  !RP,2315,0,{{apnp}}
  ```
  Reemplace {{apnp}} por la contraseña del APN si su operador lo requiere.

- Configurar el servidor GPRS a la IP del servidor Plaspy
  ```
  !RP,2319,0,54.85.159.138
  ```

- Establecer el puerto del servidor a 8888
  ```
  !RP,769,0,8888
  ```

- Reiniciar el rastreador para aplicar los ajustes
  ```
  !R3,70,0
  ```
  El comando de reinicio se usa comúnmente después de la configuración inicial para que los ajustes entren en vigor; úselo cuando sea necesario.

- Verificar ajustes actuales
  ```
  !RO
  ```
  Use este comando de verificación para listar los valores de configuración actuales que el dispositivo devuelve.

Notas sobre los marcadores de posición: {{apn}} es obligatorio para la conectividad de datos. {{apnu}} y {{apnp}} son opcionales y solo necesarios si su operador exige usuario o contraseña para el APN.

## Notas de configuración

- La configuración vía SMS se muestra porque está documentada públicamente para este modelo; también pueden estar disponibles herramientas del fabricante y sistemas OTA como PULS para aprovisionamiento masivo y actualizaciones de firmware.
- El comportamiento y los comandos SMS disponibles pueden variar según la versión de firmware y la revisión de hardware. Confirme el soporte de comandos para la versión exacta de firmware de su dispositivo.
- Elija UDP o TCP de acuerdo con las necesidades de su instalación; Plaspy soporta ambos y detecta automáticamente el protocolo en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos soportados para simplificar la configuración del servidor y permitir la detección automática del protocolo.
- Verifique siempre las credenciales del APN con el operador de la SIM antes de aplicar ajustes para evitar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp LMU-700 con Plaspy ofrece un camino directo para integrar un rastreador vehicular probado en una plataforma de gestión de flotas unificada. Con los valores públicos de configuración anteriores puede apuntar las unidades al servidor Plaspy y confirmar que los mensajes de ubicación, eventos y estado llegan a la plataforma, habilitando monitoreo, alertas y supervisión operativa de la flota.

Para saber más sobre Plaspy y cómo la plataforma gestiona la conectividad y telemetría de los dispositivos, visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y procedimientos del fabricante consulte el sitio de CalmAmp en http://www.calamp.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
