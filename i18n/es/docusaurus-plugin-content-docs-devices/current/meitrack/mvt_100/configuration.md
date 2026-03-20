---
slug: /meitrack/mvt_100/configuration
id: mvt_100-configuration
sidebar_label: Configuration
title: Meitrack - MVT-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack MVT-100 para usar con el servidor Plaspy d.plaspy.com puerto 8888 UDP o TCP
keywords:
  - Configuración Meitrack MVT-100
  - Instalación Meitrack MVT-100
  - Configuración MVT-100 Plaspy
  - Configuración rastreador GPS MVT-100
  - Configuración servidor Meitrack
  - Configuración de rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreo de flotillas
  - Configuración SMS MVT-100
  - Configuración GPRS Meitrack
---

# Meitrack - Configuración MVT-100

Esta página reúne la información pública y práctica para configurar el rastreador Meitrack MVT-100 con la plataforma Plaspy. Aquí encontrará los pasos y comandos públicos necesarios para apuntar un MVT-100 a Plaspy y verificar que el dispositivo pueda comunicarse con el punto de conexión del servidor Plaspy. Cuando la configuración deba realizarse desde el lado del fabricante, se muestran los comandos SMS más comunes y los ajustes de servidor requeridos según la documentación pública.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MVT-100 admite configuración por SMS y por GPRS; los ejemplos de SMS abajo usan la contraseña por defecto del dispositivo 0000 según la documentación pública.

## Resumen de la configuración

El objetivo es preparar el MVT-100 para que se comunique de manera confiable con Plaspy y así el dispositivo sea visible y reportable en la plataforma. Los comandos de ejemplo son públicos y se enfocan en indicar al rastreador a dónde enviar los datos, con qué frecuencia hacerlo y qué eventos reportar.

- Apuntar el dispositivo al punto de conexión del servidor Plaspy para enviar posiciones y eventos.
- Configurar el APN y credenciales para que funcione el envío por GPRS.
- Establecer un intervalo de reporte y zona horaria adecuados para obtener telemetría precisa.
- Validar la conectividad para que el dispositivo aparezca en Plaspy y los eventos queden registrados.
- Utilizar la configuración por SMS o el software del fabricante según prefiera el instalador y el tipo de despliegue.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

## Requisitos previos habituales

- Un MVT-100 con batería cargada y acceso a su interfaz de configuración por SMS o al software oficial de Meitrack.
- Una SIM activa con datos y SMS habilitados y el APN correcto según la red móvil.
- Conocimiento de la contraseña del dispositivo (los ejemplos públicos usan la contraseña por defecto 0000).
- Acceso a la documentación del instalador o a las guías de configuración de Meitrack para su versión de firmware.
- Cobertura celular fiable en la ubicación del dispositivo para conexiones GPRS hacia Plaspy.
- Un teléfono capaz de enviar SMS o una herramienta del proveedor que entregue los comandos equivalentes.

## Cómo se conecta este rastreador a Plaspy

El MVT-100 se configura para enviar su telemetría y mensajes de eventos por GPRS al punto de conexión y puerto del servidor Plaspy. Plaspy recibe los paquetes en el puerto compartido y determina automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar el protocolo por dispositivo en el servidor.

- El rastreador se apunta a un servidor Plaspy (ya sea el dominio o la IP pública).
- El dispositivo envía la ubicación GPS y los eventos configurados vía GPRS a Plaspy.
- El transporte puede configurarse como UDP o TCP según soporte del dispositivo y preferencia del instalador.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados y detecta el protocolo automáticamente.
- Las actualizaciones periódicas de posición (según el intervalo configurado) y los reportes de eventos permiten el monitoreo operativo en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Meitrack para su MVT-100, ya sea mediante comandos SMS o a través del software del fabricante, siguiendo las instrucciones de su firmware.
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o en el comando SMS.
3. Establezca el puerto del servidor en 8888, ya que todos los dispositivos Plaspy usan este mismo puerto.
4. Elija UDP o TCP para el transporte si el dispositivo solicita seleccionar el tipo durante la configuración.
5. Configure el APN y cualquier usuario o contraseña de APN que requiera el proveedor de la SIM usando el método del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo y los datos entrantes en la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos siguientes se obtienen de comandos SMS públicos disponibles para el MVT-100. Los comandos usan la contraseña por defecto 0000. Envíe cada línea como un SMS independiente al número del dispositivo. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos por los datos del proveedor de la SIM al ejecutar los comandos.

- Opcional, inicialización o restauración a valores de fábrica (usar solo si necesita restaurar ajustes):
```text
0000,F11
```

- Configurar el servidor GPRS a la IP de Plaspy, puerto y APN como marcador (este comando utiliza la forma de IP pública):
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Note: {{apn}} es el nombre del punto de acceso que suministra su operador móvil. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN.

- Ajustar la zona horaria a UTC-0:
```text
0000,B36,0
```

- Establecer el intervalo de actualización a 1 minuto:
```text
0000,A12,6,0
```

- Configurar reporte de eventos (ejemplo con una configuración de eventos común):
```text
0000,C03,0
```

Si su instalación utiliza el software del fabricante en lugar de SMS, aplique la misma dirección y puerto del servidor en la interfaz del programa. Los ejemplos de SMS arriba preservan los formatos públicos exactos proporcionados por Meitrack.

## Notas de configuración

- El firmware y la disposición de menús pueden variar entre unidades MVT-100. Confirme siempre los comandos y nombres de menús según la versión de firmware del dispositivo.
- El MVT-100 admite configuración por SMS como se muestra; si lo prefiere, utilice las herramientas oficiales de Meitrack para aprovisionamiento masivo o gestión remota.
- Elija UDP o TCP según las características de la red y sus políticas operativas; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Asegúrese de que el APN, usuario y contraseña del APN coincidan con lo que exige su proveedor de SIM; un APN incorrecto es la causa más común de fallo en GPRS.
- Mantenga la zona horaria y el intervalo de reporte alineados con sus necesidades de monitoreo para que la telemetría coincida con los informes en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Meitrack MVT-100 para reportar a Plaspy ofrece a los gestores de flota una vista consistente a nivel de plataforma de las ubicaciones de los vehículos y la actividad de eventos. Al reportar al punto de conexión compartido de Plaspy, las organizaciones obtienen visibilidad en tiempo real, reportes programados y alertas basadas en eventos que apoyan la operación, la seguridad y la gestión de activos.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el MVT-100, visite https://www.plaspy.com. Para detalles específicos de configuración, notas de firmware y la referencia oficial de comandos, verifique la documentación más reciente en el sitio del fabricante https://www.meitrack.com/
