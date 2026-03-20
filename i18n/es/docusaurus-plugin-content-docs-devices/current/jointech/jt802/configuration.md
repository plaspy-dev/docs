---
slug: /jointech/jt802/configuration
id: jt802-configuration
sidebar_label: Configuration
title: Jointech - JT802 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Jointech JT802 para Plaspy con ajustes de servidor compartido y comandos SMS APN para reporte GPRS a la plataforma Plaspy
keywords:
  - Configuración Jointech JT802
  - Configuración JT802 para Plaspy
  - Ajustes servidor JT802
  - Configuración APN JT802
  - Configuración rastreador Plaspy
  - Configuración rastreador Jointech
  - Configuración plataforma GPS JT802
  - Seguimiento de flota JT802
  - Configuración bloqueo de válvula JT802
  - Configuración de dispositivo Plaspy
---

# Jointech - Configuración JT802

Esta página documenta el contexto público de configuración para usar el bloqueo de válvula esclavo Jointech JT802 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en los comandos SMS proporcionados por el fabricante que se usan comúnmente para apuntar la unidad a Plaspy para el reporte de eventos y estados. El contenido está pensado para ayudar a integradores técnicos y a ingenieros de flota a preparar el JT802 para su uso junto a rastreadores GPS y la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, las herramientas del proveedor y el tipo de instalación. La configuración del JT802 suele emplear comandos SMS GPRS para establecer el APN y el endpoint del servidor; esta página conserva el formato público de los comandos y explica los marcadores para que usted pueda adaptar los pasos a su sitio y versión de firmware.

## Resumen de configuración

Configurar el JT802 para Plaspy prepara el dispositivo para reportar el estado de la válvula, alarmas y eventos temporales a la plataforma Plaspy, de modo que esos eventos puedan correlacionarse con las posiciones de los rastreadores GPS. El objetivo práctico es asegurar que el JT802 pueda comunicarse con el servidor de Plaspy por GPRS y que las credenciales APN estén correctamente configuradas.

- Configure el JT802 para que apunte al endpoint del servidor Plaspy y así los eventos lleguen de forma confiable a su cuenta.
- Establezca el APN del dispositivo y las credenciales APN opcionales para que la unidad abra sesión de datos GPRS.
- Elija el transporte (UDP o TCP) si el firmware del dispositivo o su entorno de red lo requieren.
- Guarde y aplique la configuración, luego verifique que el JT802 sea visible y esté reportando en Plaspy.
- Use el formato de comandos SMS provisto para evitar la navegación manual por menús al configurar varias unidades.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar cualquiera)
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- El JT802 debe estar alimentado y dentro de cobertura GSM/GPRS, con una SIM activa que permita datos.
- Confirme el ID del dispositivo (Tracker ID) de la unidad que va a configurar; los comandos SMS requieren el prefijo del ID.
- Acceso al método de configuración del fabricante para su unidad, comúnmente comandos SMS o herramientas oficiales de Jointech.
- Conozca el APN del operador para la SIM en el dispositivo y, si aplica, el nombre de usuario y la contraseña del APN.
- Un teléfono con capacidad para enviar SMS o una plataforma de gestión que pueda enviar mensajes de configuración al número del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El JT802 se configura para enviar el estado del bloqueo de la válvula, eventos de alarma e información temporal al endpoint y puerto compartidos de Plaspy, de modo que esos eventos puedan correlacionarse con los datos de posición del rastreador GPS y mostrarse en los paneles de Plaspy.

- El dispositivo se configura para reportar a d.plaspy.com (o a la IP del servidor Plaspy) en el puerto 8888.
- Los reportes y alarmas llegan a Plaspy por UDP o TCP según la configuración de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los eventos del JT802 para su procesamiento.
- Los eventos del JT802 se vinculan con la telemetría GPS de la flota para proporcionar contexto operativo y auditoría.
- La visibilidad en la plataforma permite alertas, reproducción de rutas e integración con los flujos de trabajo de la flota.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración Jointech para el JT802, normalmente comandos SMS o las herramientas de Jointech.
2. Prepare el ID del dispositivo (tracker ID) y la información del APN del operador para la SIM instalada en la unidad.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
4. Establezca el puerto 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el firmware lo requiere.
7. Valide que el JT802 reporte eventos y estado a Plaspy y que aparezca en los paneles de la plataforma.

## Ejemplo de comandos de configuración

Para configurar el JT802 vía SMS, use el formato de comando SMS proporcionado por el fabricante. Los comandos públicos siguientes son la secuencia estándar para establecer el servidor GPRS y, si es necesario, las credenciales APN. Envíe cada línea como un SMS al número del dispositivo, anteponiendo los comandos con el ID del dispositivo tal como se muestra.

- Instrucción: incluya el ID del dispositivo (Tracker ID) al inicio de cada SMS. Reemplace los marcadores según se indica más abajo.

1) Establecer el servidor GPRS y el APN (reemplazar marcadores)
```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```

2) (Opcional) Establecer el nombre de usuario y la contraseña del APN si su operador los requiere
```
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```

Explicación de los marcadores:
- {{trackerID}} — el ID del dispositivo o el prefijo IMEI requerido por el formato de comando SMS del JT802.
- {{apn}} — el nombre del APN del operador para la SIM en el JT802.
- {{apnu}} — nombre de usuario del APN si lo exige el operador; omitir si no es necesario.
- {{apnp}} — contraseña del APN si lo exige el operador; omitir si no es necesario.

Notas sobre el uso:
- El ejemplo usa la IP del servidor Plaspy 54.85.159.138 en el comando GPRS. Si su firmware o proceso acepta un dominio, puede usar d.plaspy.com donde esté soportado.
- Envíe el segundo comando solo cuando su APN requiera autenticación. El dispositivo puede aceptar campos de usuario o contraseña vacíos según el firmware.

## Notas de configuración

- Las diferencias de firmware pueden afectar la sintaxis exacta del SMS y el orden de los parámetros; siempre confirme el formato de comando para la versión de firmware de su JT802.
- El JT802 soporta configuración vía SMS como se muestra aquí; en algunas implementaciones puede ser preferible utilizar las herramientas de Jointech o sistemas de aprovisionamiento cuando estén disponibles.
- Elija TCP o UDP según la confiabilidad de su red y el comportamiento del operador; UDP es habitual por su menor sobrecarga, TCP puede mejorar la entrega a costa de la gestión de sesión.
- Los comandos de nombre de usuario y contraseña del APN son opcionales y deben usarse solo cuando el operador móvil lo requiera.
- Plaspy usa el mismo puerto (8888) para todos los dispositivos y detectará automáticamente el protocolo del rastreador una vez que el dispositivo apunte al endpoint de Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el JT802 para reportar a Plaspy proporciona a los operadores de flota visibilidad consolidada de eventos de válvula, estados de alarma e información temporal junto con los datos de posición del rastreador GPS. Esta vista combinada facilita una respuesta más rápida a incidentes, mejores auditorías de entregas y flujos de trabajo de prevención de robo al relacionar la actividad de la válvula con la ubicación del vehículo.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el JT802 visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y referencias oficiales de comandos más actuales, verifique los detalles con el fabricante en https://www.jointcontrols.com/ ya que el hardware y el firmware pueden cambiar con el tiempo.
