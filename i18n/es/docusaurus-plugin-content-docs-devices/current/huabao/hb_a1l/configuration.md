---
slug: /huabao/hb_a1l/configuration
id: hb_a1l-configuration
sidebar_label: Configuration
title: Huabao - HB-A1L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar la cerradura Huabao HB-A1L con Plaspy, incluyendo ajustes de servidor y flujo de configuración
keywords:
  - Configuración Huabao HB A1L
  - Configuración HB A1L Plaspy
  - Configuración cerradura Huabao
  - Configuración servidor HB A1L
  - Configuración HB A1L para Plaspy
  - Integración maestro GPS
  - Telemetría cerraduras de flota
  - Seguimiento seguridad vehicular
  - Configuración dispositivo Plaspy
  - Guía instalación HB A1L
---

# Huabao - Configuración HB-A1L

Esta página describe el contexto público de configuración para usar la cerradura electrónica esclava Huabao HB-A1L con la plataforma Plaspy. Se centra en cómo los eventos de la cerradura, alarmas por manipulación, registros RFID y el estado de batería son reenviados mediante un HB-A1Lm maestro GPS emparejado hacia Plaspy, y qué ajustes compartidos del servidor Plaspy son necesarios para recibir esos eventos en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para preparar el maestro HB-A1Lm y las unidades esclavas HB-A1L para la integración con Plaspy, y consulte la documentación del fabricante para instrucciones específicas del dispositivo.

## Resumen de configuración

El objetivo al configurar el HB-A1L para Plaspy es asegurar que la cerradura esclava se empareje correctamente con su maestro HB-A1Lm, que el maestro esté configurado para enviar eventos de dispositivo y de cerradura a Plaspy, y que esos eventos aparezcan de forma fiable en la plataforma. Dado que el HB-A1L es un dispositivo Bluetooth esclavo, la configuración de red se aplica en el dispositivo maestro emparejado y no en la cerradura misma.

- Empareje cada HB-A1L esclavo con un maestro HB-A1Lm para que los eventos de cerradura y alarmas sean agregados por el maestro.
- Configure el maestro HB-A1Lm para reportar telemetría agregada y eventos de cerradura a Plaspy usando los ajustes de servidor compartidos.
- Valide la conectividad desde el maestro hacia Plaspy comprobando la entrega de eventos y el estado en vivo en la plataforma.
- Confirme que eventos de cerradura como desbloqueo ilegal, corte de cadena y batería baja sean visibles en Plaspy junto con la ubicación del vehículo.
- Asegúrese de que el firmware y las herramientas del proveedor correspondan a la versión requerida para su entorno antes de un despliegue masivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la instalación

- Acceso a la herramienta de configuración del maestro HB-A1Lm o al software oficial del fabricante.
- Baterías cargadas y alimentación funcional tanto en las cerraduras HB-A1L esclavas como en el maestro HB-A1Lm.
- Acceso físico para emparejar cada HB-A1L con el HB-A1Lm por Bluetooth.
- Conectividad de red en el maestro HB-A1Lm para que pueda alcanzar d.plaspy.com o 54.85.159.138.
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para el instalador.
- Documentación del fabricante y notas de la versión para matices específicos según el firmware.

## Cómo se conecta este tracker a Plaspy

El HB-A1L es un esclavo Bluetooth que reenvía eventos de puertas y seguridad a un maestro GPS HB-A1Lm. El maestro agrega el estado de la cerradura, lecturas RFID y eventos de alarma junto con la telemetría GPS y del vehículo, y luego envía ese feed combinado a Plaspy usando el endpoint y puerto compartidos.

- Los eventos de cerradura y alarmas se transmiten del HB-A1L al HB-A1Lm mediante BLE.
- El maestro HB-A1Lm envía eventos agregados a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo maestro; Plaspy admite ambos.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes sin requerir variación de puerto por dispositivo.
- Los eventos en Plaspy se correlacionan con la ubicación del vehículo y otra telemetría proporcionada por el maestro para un monitoreo unificado.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante HB-A1Lm y abra los ajustes del dispositivo.
2. Empareje el/los HB-A1L esclavo(s) con el maestro HB-A1Lm siguiendo el procedimiento recomendado de emparejamiento BLE.
3. En los ajustes de servidor o APN del maestro, introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor.
4. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
5. Seleccione UDP o TCP para el transporte si la herramienta de configuración solicita una opción.
6. Aplique o guarde la configuración en el maestro HB-A1Lm y siga cualquier indicación del proveedor para confirmar los ajustes.
7. Reinicie o haga un ciclo de energía del dispositivo maestro si el fabricante lo requiere para activar los nuevos ajustes de servidor.
8. Valide que el maestro reporta a Plaspy y que los eventos de cerradura HB-A1L son visibles en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o cadenas SMS varían según la herramienta del fabricante, la versión de firmware y la implementación del maestro HB-A1Lm. Dado que el HB-A1L es un esclavo Bluetooth, la configuración del servidor se aplica en el dispositivo maestro emparejado y no en el esclavo. Utilice la interfaz de configuración oficial del HB-A1Lm o la documentación del proveedor para realizar la configuración de servidor y transporte indicada arriba.

Si utiliza una herramienta del fabricante que expone comandos en crudo, siga los ejemplos del proveedor en su documentación. Conserve los marcadores de posición como {{apn}} o similares cuando aparezcan en ejemplos del fabricante y reemplácelos por sus valores de red según las indicaciones del proveedor.

## Notas de configuración

- Las diferencias de firmware en el maestro HB-A1Lm pueden cambiar la ubicación de las opciones en la interfaz y los pasos requeridos; confirme siempre la versión de firmware del maestro antes de seguir una guía.
- Elija UDP o TCP en el maestro según las recomendaciones del proveedor y consideraciones de fiabilidad de la red; Plaspy acepta ambos en el puerto 8888.
- Dado que el HB-A1L no tiene radio celular, asegúrese de que el maestro HB-A1Lm tenga la conectividad de red necesaria para alcanzar d.plaspy.com o 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo entrante, lo que simplifica la configuración del servidor.
- Consulte siempre las instrucciones de instalación de Huabao para procedimientos de emparejamiento, manejo de manipulación y detalles de montaje mecánico específicos del HB-A1L.

## Por qué usar Plaspy con esta configuración

Usar el HB-A1L con Plaspy centraliza el estado de la cerradura, los eventos de alarma y los registros de acceso RFID junto con la telemetría del vehículo, de modo que los operadores de flota puedan monitorear eventos de seguridad en tiempo real y responder más rápido a robos o manipulaciones. Esta arquitectura mantiene el HB-A1L compacto y resistente al delegar la conectividad de red al maestro HB-A1Lm, mientras que Plaspy ofrece una vista operativa unificada de ubicación y datos de seguridad.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante más actuales, verifique las instrucciones y descargas en el sitio oficial de Huabao https://www.huabaotelematics.com/ antes del despliegue final.
