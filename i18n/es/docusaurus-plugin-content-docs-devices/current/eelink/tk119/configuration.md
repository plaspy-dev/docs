---
slug: /eelink/tk119/configuration
id: tk119-configuration
sidebar_label: Configuration
title: EElink - TK119 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink TK119 y conectarlo a Plaspy con servidor compartido y comandos SMS
keywords:
  - configuración EElink TK119
  - instalación EElink TK119
  - configuración servidor EElink TK119
  - EElink TK119 Plaspy
  - configuración rastreador GPS TK119
  - ajustes servidor TK119
  - configuración rastreador EElink
  - configuración dispositivo Plaspy
  - configuración MoveLink EELINK
  - configuración rastreador vehicular
---

# EElink - TK119 Configuración

Esta página detalla el contexto público de configuración para usar el rastreador EElink TK119 con Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos visibles al fabricante que permiten al TK119 reportar ubicación y eventos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK119 admite comandos de configuración por SMS como método común para establecer APN y valores de servidor necesarios para conectarse a Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el TK119 para que se comunique de forma confiable con Plaspy, reporte posiciones y alarmas, y sea visible en la plataforma. Para unidades TK119 que soportan configuración por SMS, un conjunto breve de comandos SMS puede establecer la zona horaria, el APN, el servidor de Plaspy y el intervalo de reporte.

- Establecer el APN para que el dispositivo pueda crear conexión de datos GPRS y reportar a Plaspy.
- Configurar el dispositivo para que reporte al servidor Plaspy usando el endpoint y puerto compartidos.
- Elegir el transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Definir el intervalo de reporte para que las actualizaciones de ubicación aparezcan con la cadencia deseada en Plaspy.
- Verificar la configuración con el comando de consulta de parámetros para confirmar conectividad y ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El transporte puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar conexiones MoveLink EELINK y otros protocolos soportados

## Requisitos habituales antes de configurar

- Dispositivo encendido e instalado o alimentado temporalmente para la configuración
- SIM activa con datos y capacidad SMS y conocer el APN del operador
- Acceso a un teléfono o pasarela SMS para enviar comandos de configuración si utiliza configuración por SMS
- Acceso a las instrucciones o al software de configuración del fabricante para el modelo TK119
- Una cuenta en Plaspy o acceso a la plataforma para confirmar que el dispositivo reporta después de la configuración
- Información básica de identificación del dispositivo como el IMEI para asociar el rastreador en Plaspy

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de servidor de Plaspy, el TK119 establece una conexión de datos GPRS y envía su ubicación, alarmas y mensajes de estado al endpoint compartido de Plaspy. Plaspy recibe esos mensajes en el puerto compartido y determina automáticamente el manejador de protocolo correcto para procesar los mensajes del dispositivo.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El rastreador envía actualizaciones periódicas de posición y alarmas de eventos a Plaspy para su visualización en tiempo real.
- Plaspy detecta automáticamente el protocolo del rastreador por lo que no es necesario variar puertos en la plataforma.
- Las alarmas y los estados de entradas reportados por el TK119 aparecen en los paneles y registros de Plaspy para monitoreo y notificaciones.
- El transporte puede usar UDP o TCP según la preferencia del dispositivo y las condiciones de la red.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del EElink TK119 o al software correspondiente. En muchas implementaciones del TK119 se soporta la configuración por SMS y está documentada en el manual del dispositivo.
2. Prepare la SIM y confirme los ajustes APN del operador que el dispositivo usará para GPRS.
3. Ingrese la dirección del servidor Plaspy estableciendo d.plaspy.com o 54.85.159.138 como host del servidor.
4. Configure el puerto a 8888 y elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Aplique o guarde la configuración en el dispositivo (para SMS esto significa enviar los comandos SMS y esperar la confirmación).
6. Reinicie o corte la alimentación del dispositivo si el equipo o el firmware lo requieren para aplicar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporta a Plaspy verificando la actividad en la plataforma y usando comandos de consulta de parámetros del dispositivo si están disponibles.

## Comandos de configuración de ejemplo

El TK119 puede configurarse enviando mensajes SMS con comandos específicos. Los siguientes comandos públicos se presentan en el orden mostrado en la guía del fabricante. Etiquete el comando de restablecimiento de fábrica como opcional y úselo solo cuando sea necesario.

- Restablecimiento de fábrica inicial opcional (solo si necesita devolver el dispositivo a valores predeterminados)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0 (comando de ejemplo)
```text
GMT,E,0#
```

- Establecer el APN del operador
Nota: Reemplace el marcador de posición [apn] por el APN de su operador. Si su operador requiere usuario y contraseña de APN, incluya [apnu] y [apnp] como se muestra.
```text
APN,[apn]#
```
O con usuario y contraseña opcionales:
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS a Plaspy usando el dominio y el puerto compartido de Plaspy
Use la forma con dominio para establecer el host del servidor Plaspy (se aplica la detección automática de protocolo de Plaspy y el puerto compartido 8888):
```text
SERVER,1,d.plaspy.com,8888#
```
O configure el servidor usando la dirección IP de Plaspy si lo prefiere:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a cada 60 segundos (ajuste según sea necesario)
```text
TIMER,60#
```

- Verificar parámetros actuales en el dispositivo
```text
PARAM#
```

Envíe cada comando como un SMS al número asociado al IMEI del dispositivo. La sintaxis exacta y las respuestas pueden variar según el firmware; consulte la documentación del dispositivo si los comandos no funcionan como se espera. Recuerde que Plaspy usa el mismo puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo del rastreador después de configurar el servidor.

## Notas de configuración

- Las versiones de firmware del fabricante y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones soportadas; confirme siempre con la documentación más reciente de EElink.
- Elija UDP o TCP de acuerdo con el comportamiento del dispositivo y la fiabilidad de la red; algunas implementaciones prefieren UDP por menor sobrecarga mientras que otras usan TCP por entrega más confiable.
- La configuración por SMS es un método público común para modelos TK119 y resulta útil cuando el acceso físico al dispositivo es limitado.
- Mantenga los marcadores de posición [apn], [apnu] y [apnp] intactos al preparar los comandos y reemplácelos por los valores del operador cuando sea necesario.
- El comando TIMER define la frecuencia con la que el dispositivo envía actualizaciones de posición; ajústelo para equilibrar la granularidad de reporte y el uso de datos.

## Por qué usar Plaspy con esta configuración

Usar el TK119 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de vehículos, alarmas y estado operativo. Configurar el rastreador para que reporte al endpoint y puerto compartidos de Plaspy permite una integración rápida, de modo que las actualizaciones de posición y las alertas de incidentes aparezcan en paneles y herramientas de reporte sin cambios en el backend.

Para obtener más información sobre Plaspy y las opciones de integración de dispositivos compatibles visite https://www.plaspy.com. Los métodos de configuración específicos de cada dispositivo, el comportamiento del firmware y la documentación del fabricante pueden cambiar con el tiempo; verifique las instrucciones y la sintaxis de comandos más recientes en el sitio oficial de EElink https://www.eelink.com.cn/ antes de desplegar.
