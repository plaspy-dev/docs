---
slug: /meitrack/ts299l/configuration
id: ts299l-configuration
sidebar_label: Configuration
title: Meitrack - TS299L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Meitrack TS299L a Plaspy usando servidores compartidos y comandos SMS
keywords:
  - configuración Meitrack TS299L
  - configuración TS299L para Plaspy
  - configuración de rastreador Meitrack
  - configuración de servidor TS299L
  - configuración de dispositivo Plaspy
  - comandos SMS para rastreador GPS
  - integración con plataforma de seguimiento de vehículos
  - ajustes GPRS TS299L
  - configuración plug and play de rastreador GPS
  - guía de configuración Meitrack
---

# Meitrack - Configuración del TS299L

Esta página ofrece orientación pública para configurar el Meitrack TS299L con la plataforma de gestión de flotas Plaspy. Se enfoca en los ajustes de servidor compartido que Plaspy requiere e incluye ejemplos prácticos de comandos SMS extraídos del formato de configuración pública del dispositivo para facilitar la puesta en marcha y la verificación.

Plaspy utiliza endpoints de servidor compartidos y un único puerto de escucha para todos los rastreadores soportados, detectando automáticamente el protocolo del dispositivo. Los pasos del lado del fabricante para el TS299L pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Los ejemplos a continuación emplean el método de configuración vía SMS mostrado en la documentación pública del equipo y conservan los marcadores de posición como [apn] para los parámetros de su operador.

## Resumen de la configuración

El objetivo al configurar un TS299L para Plaspy es preparar el equipo para que envíe posiciones GNSS y datos de eventos a Plaspy y verificar la conectividad. El proceso suele ser rápido en instalaciones plug and play y se centra en establecer el servidor GPRS, el transporte y los intervalos de reporte para que el dispositivo sea visible en la plataforma Plaspy.

- Configure el dispositivo para que reporte al endpoint de Plaspy y permita la ingestión de ubicaciones y eventos.
- Ajuste el transporte y el puerto para que el equipo pueda iniciar una sesión GPRS y enviar telemetría.
- Defina los intervalos de reporte y los eventos a notificar para que los datos aparezcan con la frecuencia deseada en Plaspy.
- Verifique la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.
- Mantenga los datos de APN del operador y, si es necesario, el usuario y la contraseña APN al configurar la SIM.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un TS299L con alimentación, instalado en el encendedor del vehículo o alimentado según las instrucciones del fabricante.
- Una tarjeta SIM activa con plan de datos y el APN correcto del operador, además de capacidad SMS si va a usar configuración por SMS.
- Acceso al método de configuración del TS299L proporcionado por Meitrack, como comandos SMS o el software del proveedor.
- Conocimiento de la contraseña del dispositivo cuando sea requerida para configurar. Los comandos de ejemplo abajo usan la contraseña por defecto 0000 según la muestra pública.
- Un medio para verificar la conectividad del equipo en Plaspy después de la configuración, por ejemplo una cuenta de operador o una lista de verificación de monitorización.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el TS299L establece una sesión de datos GPRS y envía posiciones GNSS, estado del equipo y mensajes de eventos al endpoint de Plaspy. Plaspy recibe estos uplinks en el servidor y puerto compartidos y mapea los datos en la plataforma para seguimiento en tiempo real y reportes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el dispositivo y la red; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere selección de protocolo en la plataforma.
- Los eventos del dispositivo como alertas de desconexión y actualizaciones periódicas de ubicación se envían al servidor Plaspy y se muestran en la plataforma para monitoreo y alertas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Meitrack para el TS299L, por ejemplo comandos SMS o la herramienta del proveedor.
2. Introduzca la dirección del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 si el dispositivo requiere una IP.
3. Configure el puerto 8888 en la configuración del equipo.
4. Seleccione UDP o TCP como transporte si el dispositivo solicita elección de transporte durante el setup.
5. Aplique o guarde la configuración en el dispositivo y envíe los SMS necesarios para confirmar los ajustes.
6. Reinicie o haga un ciclo de alimentación del equipo si las instrucciones del fabricante recomiendan un reinicio para aplicar cambios.
7. Verifique que el dispositivo reporte en Plaspy y que la ubicación y los eventos aparezcan en la plataforma.

## Comandos de ejemplo para la configuración

El TS299L admite configuración basada en SMS. Los siguientes comandos son muestras públicas que muestran una secuencia de configuración común. La contraseña de dispositivo usada en estos ejemplos es 0000, que es el valor de fábrica en la muestra pública. Conserve los marcadores de posición [apn], [apnu] y [apnp] y reemplácelos por el APN del operador, el usuario y la contraseña APN según sea necesario.

- Comando opcional de restablecimiento a fábrica o ajustes iniciales
```sms
0000,F11
```
Etiqueta: Configuración inicial opcional o restablecimiento a valores de fábrica. Use solo si desea restaurar los valores por defecto.

- Establecer el servidor GPRS al endpoint Plaspy usando IP y puerto e incluir el APN del operador
```sms
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Notas:
- Este comando configura el servidor GPRS del dispositivo a 54.85.159.138 en el puerto 8888 tal como muestra el ejemplo público.
- El parámetro numérico después de A21 en el ejemplo (2) forma parte del formato SMS del dispositivo usado en la muestra pública. Mantenga la sintaxis del comando exactamente como lo prescribe la documentación del equipo.
- [apn] es un marcador obligatorio para el APN del operador móvil. [apnu] y [apnp] son marcadores opcionales para el usuario y la contraseña APN y deben incluirse solo si su operador los requiere.

- Ajustar la zona horaria a UTC 0
```sms
0000,B36,0
```

- Establecer el intervalo de actualización a un minuto
```sms
0000,A12,6,0
```
Nota: El comando A12 en la muestra pública fija un intervalo de actualización. Mantenga los valores de parámetros exactos de la guía del fabricante si cambia la frecuencia de reporte.

- Configurar parámetros de reporte de eventos
```sms
0000,C03,0
```
Nota: Este comando refleja el ejemplo público para la configuración de eventos. Consulte la documentación de Meitrack para conocer los significados exactos de la máscara de eventos.

## Notas de configuración

- La configuración por SMS es un método público soportado para el TS299L. Use comandos SMS solo si dispone de cobertura celular y privilegios SMS en la SIM del equipo.
- Revisiones de firmware del fabricante o variantes regionales de hardware pueden cambiar la sintaxis SMS y los parámetros disponibles. Verifique siempre con la documentación oficial de Meitrack correspondiente a la versión de firmware de su equipo.
- Plaspy soporta UDP y TCP en el puerto compartido 8888. Elija el transporte que el dispositivo requiera y asegúrese de que la sintaxis del comando coincida con el formato SMS o de la herramienta del equipo.
- Conserve los marcadores [apn], [apnu] y [apnp] cuando copie los comandos de ejemplo y reemplácelos por los valores del operador según proceda.
- Los comandos de ejemplo muestran la contraseña por defecto 0000 del equipo en la muestra pública. Si ha cambiado la contraseña del dispositivo, utilice la contraseña actual en los comandos.

## Por qué usar Plaspy con esta configuración

Configurar un TS299L para que reporte a Plaspy ofrece una vía rápida para la visibilidad del vehículo, alertas de eventos y agregación de telemetría sin instalaciones complejas. Para operaciones que requieren despliegues ágiles, el diseño plug and play del TS299L junto con la ingestión de Plaspy proporciona seguimiento casi en tiempo real, alertas de desconexión y visibilidad de sensores en una sola plataforma en la nube.

Para obtener más información sobre Plaspy y cómo gestiona el seguimiento de flotas, visite https://www.plaspy.com. Para detalles específicos de dispositivo, comportamiento de firmware y comandos oficiales consulte la documentación de Meitrack en https://www.meitrack.com/ para verificar las instrucciones de configuración más recientes.
