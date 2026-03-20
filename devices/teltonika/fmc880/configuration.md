---
slug: /teltonika/fmc880/configuration
id: fmc880-configuration
sidebar_label: Configuration
title: Teltonika - FMC880 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Teltonika FMC880 to Plaspy using shared Plaspy server settings
keywords:
  - Teltonika FMC880 configuration
  - FMC880 setup Plaspy
  - Teltonika server configuration
  - FMC880 GPS tracker setup
  - Plaspy device configuration
  - vehicle tracking configuration
  - FMC880 SMS setup
  - Teltonika FMC880 integration
  - GPS platform tracking setup
  - fleet tracker configuration
---

# Teltonika - FMC880 Configuration

This page describes the public configuration context for using the Teltonika FMC880 with Plaspy. It summarizes the shared server settings Plaspy requires, explains typical preparation steps, and shows the example public command used to point an FMC880 at the Plaspy endpoint. The FMC880 is a rugged battery mounted tracker with 4G LTE Cat 1 and 2G fallback, dual band GNSS L1 L5, and BLE support for sensors, and it is compatible with Plaspy out of the box.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tool or SMS commands you use. Where available this page includes the public SMS style command that Teltonika devices commonly accept for basic parameter configuration.

## Configuration Overview

The goal of this configuration is to prepare the FMC880 to reliably communicate with Plaspy so device location and sensor telemetry appear in the platform. Configuration focuses on setting the device APN and the Plaspy server endpoint and transport, validating connectivity, and confirming the tracker reports successfully to Plaspy.

- Configure the device APN and authentication values so the tracker has a working cellular data connection.
- Point the FMC880 to the Plaspy server domain or IP and set the agreed port so telemetry is routed to Plaspy.
- Choose the transport protocol (UDP or TCP) if required by the device and save the setting.
- Validate that the device connects and is visible in Plaspy; Plaspy detects the tracker protocol automatically.
- Use the sample Teltonika parameter command below as a starting point and adapt per your firmware and deployment needs.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A powered FMC880 with the battery mounting or vehicle connection completed and ready for configuration.
- An active cellular SIM with a compatible APN and data service for the device variant you are deploying.
- Access to the official Teltonika configuration method for your device such as SMS commands or the Teltonika configuration software that matches the device firmware.
- Knowledge of your APN, APN username, and APN password if required by your mobile operator.
- A method to receive device responses for verification, for example SMS feedback or connection logs from the Teltonika tool.
- Optional test environment or spare device to validate settings before mass deployment.

## How This Tracker Connects to Plaspy

Once the FMC880 is configured with a working APN and the Plaspy endpoint, it will send GNSS fixes and available sensor telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy receives the connection on the standard port and determines the correct tracker protocol automatically so devices appear in the platform without per device protocol selection.

- The tracker reports position and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device configuration and network considerations.
- Plaspy performs automatic protocol detection to interpret incoming data from the FMC880.
- Device events and sensor readings are forwarded to Plaspy for visualization, alerts, and history.
- Successful connection and reporting will make the FMC880 visible and manageable in Plaspy once validated.

## Common Configuration Workflow

1. Access the official Teltonika configuration method appropriate for your FMC880 firmware such as SMS command setup or the Teltonika configuration tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the server host field.
3. Set the communication port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP for the transport if the device requires a transport selection.
5. Provide APN and any APN credentials required by your SIM so the device can establish cellular data.
6. Apply or save the configuration and restart the tracker if your workflow or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device connectivity status and incoming messages in the Plaspy platform.

## Example Configuration Commands

The FMC880 public setup can be performed using a Teltonika style setparam command. The following example shows the public command format you can use to set APN values and point the device at Plaspy. Replace the placeholders with your operator details.

- Example Teltonika setparam command

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders
  - {{apn}} is the SIM card APN provided by your mobile operator.
  - {{apnu}} is the APN username if required by your operator; leave blank or omit if not needed.
  - {{apnp}} is the APN password if required; leave blank or omit if not needed.
  - The fields 2004 and 2005 are set to the Plaspy server domain and port d.plaspy.com and 8888 respectively.
  - The parameter 2006 is included in the public command; consult Teltonika documentation for the exact mapping for transport or behavior on your firmware.

Note: Parameter numbers such as 2001 2002 etc are Teltonika parameter identifiers used in the device command. Confirm exact parameter mapping and any additional required parameters with Teltonika documentation for your firmware version.

## Configuration Notes

- Teltonika parameter mappings and the accepted SMS or tool formats may vary by firmware version and hardware revision; always verify parameter meaning against the official Teltonika documentation for your device.
- You can configure the server using either the domain d.plaspy.com or the IP 54.85.159.138; using the domain allows DNS based routing while the IP is provided as an explicit alternative.
- Choose UDP or TCP based on your network reliability and the guidance in your Teltonika tool or firmware notes; the device may require an explicit transport flag.
- SMS based setparam commands are commonly supported by Teltonika devices but confirm SMS command support and required command syntax for the FMC880 variant you have.
- Apply and save configuration changes, then restart or power cycle the device if your device workflow or firmware requires a reboot to activate new parameters.

## Why Use Plaspy with This Configuration

Using the FMC880 with Plaspy gives operators reliable vehicle and asset visibility combined with environmental sensor monitoring through BLE. The FMC880’s rugged design and cellular resilience complement Plaspy’s centralized tracking, event rules, and reporting to provide operational oversight for fleets, rental services, and remote assets. Pointing the FMC880 to Plaspy’s shared server endpoint and confirming the APN and transport settings is a straightforward way to get devices reporting to the platform.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and Teltonika parameter references verify current documentation at https://www.teltonika-gps.com/ as manufacturer methods and firmware behavior can change over time.
