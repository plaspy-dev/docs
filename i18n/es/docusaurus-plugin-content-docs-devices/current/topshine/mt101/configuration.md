---
slug: /topshine/mt101/configuration
id: mt101-configuration
sidebar_label: Configuration
title: TopShine - MT101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine MT101 con ajustes de servidor Plaspy y comandos SMS para la conexión a la plataforma
keywords:
  - Configuración TopShine MT101
  - Configuración MT101
  - Configuración MT101 Plaspy
  - Configuración rastreador GPS TopShine
  - Configuración servidor MT101
  - Comandos SMS TopShine MT101
  - Configuración GPRS MT101
  - Instalación rastreador motocicleta TopShine
  - Configuración APN MT101
  - Integración TopShine MT101 Plaspy
---

# TopShine - Configuración MT101

Esta página documenta el contexto público de configuración para usar el rastreador TopShine MT101 con Plaspy. Reúne los ajustes de servidor Plaspy que necesita, pasos prácticos de configuración y los comandos disponibles por SMS publicados para este modelo. Utilice esta guía para preparar el dispositivo y lograr la conectividad y visibilidad en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el MT101 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que debe combinar la información aquí con la documentación del dispositivo y su flujo de trabajo de instalación. El MT101 admite configuración por SMS y GPRS y utiliza una contraseña SMS predeterminada en el conjunto de comandos publicado.

## Visión general de la configuración

Esta configuración prepara el MT101 para que reporte ubicación y eventos a Plaspy. El objetivo es que el dispositivo alcance de forma fiable el endpoint compartido de Plaspy, confirme el reporte y quede visible en la plataforma.

- Configure el endpoint y el puerto del servidor para que el MT101 pueda enviar reportes GPRS a Plaspy.
- Proporcione el APN correcto y, si es necesario, las credenciales APN para que la tarjeta SIM establezca la conexión GPRS.
- Valide la conectividad usando el comando de verificación por SMS del dispositivo y confirmando que el equipo aparece en Plaspy.
- Establezca intervalos de actualización razonables para equilibrar visibilidad en tiempo real y uso de datos.
- Opcionalmente realice un restablecimiento de fábrica o una provisión inicial usando los comandos SMS publicados cuando inicie desde un estado nuevo o desconocido.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para reportes GPRS al servidor de Plaspy
- IP del servidor 54.85.159.138 como destino alterno público
- Puerto 8888 usado para todos los dispositivos en Plaspy
- Soporte de transporte UDP o TCP; el MT101 puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para que los dispositivos puedan reportar sin selección manual del protocolo en la plataforma

## Requisitos típicos antes de la configuración

- Un MT101 alimentado con el cableado o conexión de batería requerida y cualquier relé o accesorio opcional instalado
- Al menos una tarjeta SIM activa configurada para datos y capaz de establecer GPRS; el MT101 admite dos tarjetas SIM y puede alternar entre redes
- Información del APN del operador de la SIM, y usuario y contraseña APN si son requeridos
- Acceso para enviar SMS o la herramienta de configuración del fabricante para enviar comandos de puesta a punto
- El IMEI del dispositivo disponible para identificación y para comandos que requieren valores basados en IMEI
- Una cuenta Plaspy o acceso a la plataforma Plaspy para verificar que el dispositivo reporta después de la configuración

## Cómo se conecta este rastreador a Plaspy

El MT101 se configura para enviar reportes de ubicación y estado por GPRS al endpoint y puerto del servidor de Plaspy. Una vez que el dispositivo tenga una conexión de datos funcional y los ajustes de servidor correctos, Plaspy reconocerá automáticamente el protocolo entrante y hará que el equipo sea visible en la plataforma.

- El rastreador envía datos GPRS a d.plaspy.com o a la dirección IP indicada en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que un único ajuste de puerto funciona entre modelos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a enviar datos
- El dispositivo puede aprovisionarse por SMS para configurar APN, IP o dominio del servidor y los intervalos de reporte
- Tras la configuración el dispositivo aparece en Plaspy donde usted puede monitorear ubicación y eventos

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el MT101 (los comandos SMS son el método público común para este modelo).
2. Ingrese d.plaspy.com o 54.85.159.138 como servidor GPRS según prefiera dominio o IP.
3. Establezca el puerto 8888, que es el puerto que Plaspy usa para todos los dispositivos.
4. Elija UDP o TCP si el MT101 requiere seleccionar el transporte durante la configuración.
5. Configure el APN (y el usuario y contraseña APN si son necesarios) para la SIM activa para que GPRS pueda conectarse.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporta a Plaspy verificando la actividad en la plataforma o usando el comando de verificación por SMS del equipo.

## Ejemplos de comandos de configuración

El MT101 puede configurarse por SMS usando la contraseña por defecto 000000 en el conjunto de comandos publicado. Los comandos a continuación se presentan en la forma pública proporcionada por el fabricante. Mantenga los marcadores de posición tal como aparecen y reemplácelos por sus valores al enviar el SMS.

- Restablecimiento inicial opcional a valores de fábrica use solo si desea restaurar los valores predeterminados:
```text
W000000,990,099###
```

- Establecer ID del dispositivo el comando del fabricante espera los primeros 14 dígitos del IMEI Nota el IMEI es requerido por los comandos del fabricante Plaspy identifica los dispositivos usando el IMEI en la plataforma
```text
W000000,010,<first 14 IMEI digits>
```

- Establecer el APN del operador Reemplace [apn] con el APN de su operador Si su APN requiere usuario o contraseña incluya [apnu] y [apnp] respectivamente El formato acepta solo APN o APN,usuario,contraseña
```text
W000000,011,[apn][,[apnu],[apnp]]
```

- Establecer el servidor GPRS hacia Plaspy Este ejemplo usa la IP y el puerto publicados Puede usar el dominio d.plaspy.com en lugar de la IP si lo prefiere
```text
W000000,012,54.85.159.138,8888
```

- Cambiar el dispositivo a modo GPRS según requiera el fabricante para el reporte de datos:
```text
W000000,013,2
```

- Establecer el intervalo de actualización del dispositivo El valor de ejemplo aquí 6 proviene del conjunto de comandos público y debe ajustarse según su política de reporte
```text
W000000,014,6
```

- Comando de verificación para solicitar el IMEI al dispositivo:
```text
W000000,601
```

Notas sobre los marcadores de posición:
- [apn] es la cadena APN de su operador móvil
- [apnu] es el usuario APN si el operador lo requiere
- [apnp] es la contraseña APN si es necesaria
- \<first 14 IMEI digits> debe reemplazarse por los primeros 14 dígitos que solicita el comando del fabricante conserve el IMEI completo para la identificación en la plataforma cuando sea necesario

## Notas de configuración

- La configuración por SMS es un método público publicado para el MT101; también puede usar cualquier herramienta del fabricante o utilidades de aprovisionamiento que TopShine provea.
- Revisiones de firmware y variantes de hardware pueden cambiar el formato de los comandos o las opciones disponibles. Confirme la sintaxis de los comandos para la versión de firmware de su dispositivo.
- Cuando estén disponibles tanto dominio como IP, usar el dominio d.plaspy.com puede ser más resiliente frente a cambios de IP del servidor; la IP 54.85.159.138 se proporciona como destino alterno público.
- El MT101 admite dos tarjetas SIM y cambio de red; asegúrese de que la SIM activa tenga un APN apropiado para datos.
- Elija transporte UDP o TCP según las opciones del firmware de su dispositivo; Plaspy detectará automáticamente el protocolo entrante en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Conectar el TopShine MT101 a Plaspy le proporciona un punto central para monitorear ubicación, trayectos y alertas en motocicletas y vehículos pequeños. Usar los ajustes de servidor compartidos de Plaspy y los comandos públicos SMS para MT101 permite un aprovisionamiento directo y una validación rápida del reporte del dispositivo.

Para obtener más información sobre Plaspy y cómo organiza los datos y el monitoreo de dispositivos, visite https://www.plaspy.com. Para métodos actuales específicos del dispositivo, notas de firmware y detalles del fabricante para el MT101, verifique la información vigente en el sitio de TopShine https://www.gztopshine.com/.
