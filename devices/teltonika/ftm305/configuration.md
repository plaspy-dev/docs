---
slug: /teltonika/ftm305/configuration
id: ftm305-configuration
sidebar_label: Configuration
title: Teltonika - FTM305 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Teltonika FTM305 tracker to Plaspy with practical server settings and example commands
keywords:
  - Teltonika FTM305 configuration
  - Teltonika FTM305 setup
  - FTM305 server configuration
  - FTM305 Plaspy setup
  - GPS tracker configuration guide
  - vehicle tracker Plaspy integration
  - Teltonika device configuration
  - Plaspy server settings
  - e mobility tracker setup
  - fleet tracking FTM305
---

# Teltonika - FTM305 Configuration

This page covers the public configuration context required to connect the Teltonika FTM305 tracker to Plaspy. It explains the shared server settings Plaspy expects, shows a practical example command exposed by the device vendor, and provides a clear workflow for preparing and validating the tracker so it will appear and report correctly in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and the Teltonika tools you use. Use the guidance below together with official Teltonika documentation for device specific details.

## Configuration Overview

This configuration process prepares the FTM305 to communicate with Plaspy by setting the network APN and server endpoint, selecting an appropriate transport, and verifying connectivity so the device sends GNSS and telemetry to the platform.

- Set the device APN and credentials so the tracker can access the cellular network required for Plaspy reporting.
- Configure the Plaspy server domain or IP and the shared port so the tracker points to the correct platform endpoint.
- Choose the transport method if required and save the configuration so the tracker uses the selected protocol.
- Validate the tracker is reaching Plaspy and visible in the Plaspy platform dashboard.
- Use manufacturer tools or SMS commands to apply settings depending on your preferred workflow.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port on the Plaspy backend

## Typical Requirements Before Setup

- A powered and accessible FTM305 tracker with the required installer connectors available
- A valid cellular SIM and active data plan with the correct APN settings for your region and carrier
- Access to Teltonika configuration tools or the ability to send SMS style configuration commands if SMS setup is used
- The Plaspy server values d.plaspy.com or 54.85.159.138 and port 8888 available for entry
- Administrative access to the device or an installer who can apply and save configuration changes
- Confirmation of the device firmware version and any vendor specific instructions from Teltonika documentation

## How This Tracker Connects to Plaspy

The FTM305 is configured to send GNSS coordinates and telemetry to the Plaspy server endpoint and port so Plaspy can ingest location updates and operational data for visualization, reporting, and rules processing.

- The tracker sends periodic location and telemetry packets to the Plaspy server endpoint d.plaspy.com on port 8888
- Transport can be UDP or TCP depending on the chosen configuration and network conditions
- Plaspy automatically detects the tracker protocol so the same port can be used for all devices
- Once connected the device updates are available in Plaspy for live tracking, event detection, and historical reporting
- Connectivity checks and device side logs can help validate that the tracker is successfully reporting to Plaspy

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FTM305 such as Teltonika remote tools or SMS based commands provided by the vendor.
2. Enter the Plaspy server address using either d.plaspy.com or the server IP 54.85.159.138 in the server or host field.
3. Set the port to 8888 which is the shared port Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires explicit transport selection; save the transport value in the device configuration.
5. Configure the APN and any APN credentials required by your cellular provider so the tracker has data connectivity.
6. Apply or save the configuration and restart the device if required by Teltonika instructions.
7. Validate that the device is reporting to Plaspy by checking device activity in Plaspy and reviewing any device side response or logs.

## Example Configuration Commands

The FTM305 can be configured using a setparam style command. The vendor provided example sets APN fields and the Plaspy server settings. Preserve the placeholders when applying the command and replace them with your carrier APN values.

- Example SMS or command line configuration for basic parameters

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- What this command does in practical terms
  - Replaces 2001 2002 and 2003 with your APN values where [apn] is the APN name, [apnu] is the APN username, and [apnp] is the APN password
  - Sets the server address to d.plaspy.com and the server port to 8888
  - Includes a 2006 parameter used by the device to select transport or protocol mode; consult Teltonika documentation for exact numeric mappings for transport options

Note: The syntax above is presented as a public example. Use Teltonika tools or SMS procedures recommended by the manufacturer to send commands to the device and verify command applicability for your firmware revision.

## Configuration Notes

- Firmware versions and regional device variants can change parameter numbering or available configuration options; always confirm with the Teltonika documentation for your exact FTM305 product code.
- You can configure the device using Teltonika remote management utilities or SMS style commands depending on your deployment and access; follow the vendor guidance for each method.
- Choose UDP or TCP according to network conditions and installer preference; Plaspy accepts either transport on the shared port but network firewalls may affect connectivity.
- Save and apply changes, then restart the tracker if required to ensure new server and APN settings take effect.
- Keep a record of applied commands and settings for deployment consistency and troubleshooting.

## Why Use Plaspy with This Configuration

Using the Teltonika FTM305 with Plaspy gives organizations a practical path to combine accurate GNSS positioning with rich telemetry for e mobility and industrial equipment monitoring. Pointing the device to Plaspy using the shared server settings and port makes onboarding consistent across fleets and simplifies backend handling because Plaspy automatically detects the tracker protocol.

Learn more about Plaspy and compatible integrations at https://www.plaspy.com. For the most current device specific configuration methods firmware details and parameter mappings always verify information with the manufacturer at https://www.teltonika-gps.com/
