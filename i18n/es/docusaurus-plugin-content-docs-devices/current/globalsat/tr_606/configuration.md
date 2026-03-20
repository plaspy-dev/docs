---
slug: /globalsat/tr_606/configuration
id: tr_606-configuration
sidebar_label: Configuration
title: GlobalSat - TR-606 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GlobalSat TR-606 para reportar a Plaspy usando servidor público y comandos SMS con ejemplos de checksum
keywords:
  - GlobalSat TR-606
  - Configuración TR-606
  - Configurar TR-606
  - Configuración rastreador GlobalSat
  - Configuración servidor TR-606
  - TR-606 configuración Plaspy
  - Configuración rastreador GPS
  - Rastreo vehicular TR-606
  - Rastreo de flotas
  - Configuración SMS TR-606
---

# GlobalSat - Configuración del TR-606

Esta página describe el contexto público de configuración para usar el GlobalSat TR-606 con la plataforma Plaspy. Se centra en los pasos prácticos y los ajustes públicos necesarios para apuntar el rastreador a Plaspy, de modo que el dispositivo envíe datos de ubicación y estado a la plataforma. Cuando sean necesarios herramientas específicas del fabricante o particularidades de firmware, esta guía explica el flujo general y preserva los comandos SMS públicos que GlobalSat ofrece para la configuración remota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan. Los pasos exactos del lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que utilice esta guía como referencia práctica y verifique los detalles específicos del equipo con la documentación oficial de GlobalSat cuando sea necesario.

## Resumen de configuración

El objetivo de esta configuración es preparar el TR-606 para que se comunique de forma fiable con Plaspy y aparezca en su flota de Plaspy. El proceso establece el punto de conexión y el transporte de red, valida la conectividad y, opcionalmente, reinicia el dispositivo para aplicar los ajustes.

- Configure el TR-606 para que reporte al servidor de Plaspy y así envíe datos de posición y estado a la plataforma.
- Defina los valores de APN y cualquier credencial requerida por la SIM y el operador móvil.
- Elija el transporte (UDP o TCP) y establezca el puerto compartido de Plaspy para que el rastreador pueda llegar a la plataforma.
- Valide la conexión y compruebe que el rastreador sea visible en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos de Plaspy al configurar el TR-606:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que no necesita un puerto específico por modelo.

## Requisitos típicos antes de la instalación

- Un equipo TR-606 instalado y con alimentación, con acceso al método de configuración por instalador o por SMS provisto por GlobalSat.
- Una tarjeta SIM activa en el dispositivo si va a usar SMS o datos móviles para la configuración y el reporte.
- El número IMEI del equipo disponible para usar en comandos SMS o en la herramienta de configuración del proveedor.
- Información del APN del operador si el dispositivo requiere conectividad de datos GPRS/3G/UMTS para enviar al servidor de Plaspy.
- Acceso al método u software de configuración oficial de GlobalSat para poder aplicar ajustes y enviar comandos según se requiera.

## Cómo se conecta este rastreador a Plaspy

El TR-606 se configura para enviar datos de ubicación y estado al punto de conexión y puerto compartidos de Plaspy. Plaspy recibe el tráfico del dispositivo y determina automáticamente el protocolo correcto para interpretar los mensajes del rastreador.

- El rastreador reporta posición GPS y estado al servidor d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte en los dispositivos que requieran una selección explícita.
- Plaspy detecta el protocolo del rastreador de forma automática, por lo que un único servidor y puerto pueden soportar múltiples modelos.
- Una vez configurado, el rastreador aparecerá en Plaspy y transmitirá actualizaciones de posición y eventos con regularidad.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de GlobalSat para el TR-606, como la interfaz de comandos SMS o la herramienta de configuración del proveedor.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP como transporte si el equipo requiere una selección explícita.
5. Configure los valores del APN del operador y las credenciales necesarias mediante el método de configuración del dispositivo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Verifique que el dispositivo esté reportando a Plaspy y que sea visible en la plataforma.

Si utiliza la configuración por SMS, envíe los comandos públicos que se muestran abajo en el orden indicado e incluya el IMEI y el checksum cuando se solicite.

## Ejemplos de comandos de configuración

El TR-606 soporta comandos de configuración por SMS. Plaspy muestra ejemplos en texto plano para la configuración por SMS. Los comandos públicos que siguen se facilitan tal como aparecen en la documentación de GlobalSat. Mantenga los marcadores y calcule el checksum exactamente como lo exige el dispositivo.

Nota de formato utilizada en los ejemplos de Plaspy:
TSPRXAB27GHKLMnaicz*U!

1) Configure el rastreador para reportar a Plaspy (reemplace marcadores y calcule el checksum)

- Comando SMS plantilla para configurar APN y ajustes del servidor Plaspy:
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Explicación de los marcadores:
  - {{imei}} — el número IMEI del dispositivo (requerido por el rastreador para dirigir el comando).
  - {{apn}} — nombre del APN del operador.
  - {{apnu}} — nombre de usuario del APN si el operador lo requiere.
  - {{apnp}} — contraseña del APN si el operador la requiere.
  - {{checksum}} — checksum de dos caracteres en hexadecimal mayúscula calculado sobre la cadena del comando hasta justo antes del carácter asterisco.

2) Comando de reinicio opcional para aplicar ajustes (etiquetado aquí como opcional pero recomendado cuando el firmware lo requiere):
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Resumen del cálculo del checksum:
- El checksum requerido es el XOR de todos los códigos de carácter en el comando hasta el carácter "*", representado como un valor hexadecimal de dos dígitos en mayúsculas. Calcule este checksum e insértelo donde aparezca el marcador {{checksum}} o {{checksumreeboot}}.

Envie estos SMS desde un número autorizado según la documentación del rastreador. El método exacto de cálculo del checksum y el comportamiento de aceptación de comandos dependen del firmware de GlobalSat.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden afectar la sintaxis de los comandos y los campos disponibles; confirme el conjunto de comandos exacto para la versión de firmware de su TR-606.
- El TR-606 soporta la configuración por SMS en los ejemplos públicos anteriores; utilice SMS cuando no pueda acceder a un método cableado o a una herramienta de software.
- Elija UDP o TCP según su entorno de red; ambos transportes son compatibles y Plaspy acepta cualquiera en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Verifique siempre las credenciales del APN con su operador móvil antes de configurar el equipo.

## Por qué usar Plaspy con esta configuración

Usar el GlobalSat TR-606 con Plaspy permite a las organizaciones consolidar los reportes de ubicación y estado de vehículos en una sola plataforma. Los ajustes de servidor compartidos de Plaspy simplifican la configuración entre diferentes modelos de dispositivos, y la detección automática de protocolos de Plaspy reduce la necesidad de endpoints específicos por modelo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos del dispositivo más recientes, notas de firmware y orientación de instalación, verifique los detalles con GlobalSat en https://www.globalsat.com.tw/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
