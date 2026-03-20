---
slug: /thingsys/ts_h1/configuration
id: ts_h1-configuration
sidebar_label: Configuration
title: ThingSys - TS-H1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS H1 showing Plaspy server settings and SMS setup for quick integration
keywords:
  - ThingSys TS H1 configuration
  - ThingSys TS H1 setup
  - TS H1 server configuration
  - TS H1 Plaspy integration
  - Plaspy GPS tracker setup
  - GPS tracker configuration guide
  - vehicle tracking platform setup
  - tracker APN configuration
  - SMS configuration commands
  - GPRS tracking setup
---

# ThingSys - TS-H1 Configuration

This page documents the public configuration context for using the ThingSys TS-H1 GPS tracker with Plaspy. It focuses on the practical server settings and the manufacturer-provided SMS commands that are used in public setups so you can prepare the device to communicate with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The TS-H1 may be configured using SMS commands or a manufacturer tool; the examples here show the public SMS commands that are commonly used to set APN and GPRS server parameters for Plaspy integration.

## Configuration Overview

Preparing the TS-H1 for Plaspy is about configuring network access and the GPRS server endpoint so the tracker can report location and events to the platform. The public SMS command flow includes setting APN credentials and pointing the device to the Plaspy server endpoint and port.

- Configure the device APN, APN username, and APN password so the SIM has data connectivity.
- Set the GPRS server to Plaspy so the tracker sends reports to the correct endpoint.
- Choose transport (UDP or TCP) if the device requires a transport selection and save the settings.
- Validate connectivity and check the device is reporting to Plaspy so it becomes visible in the platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TS-H1:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the publicly published Plaspy endpoint information for device configuration and should be applied when setting the device GPRS server or server domain.

## Typical Requirements Before Setup

- Device powered and accessible for configuration, with battery charged or connected to power.
- A valid SIM card installed with data service enabled and known APN credentials for the network operator.
- Access to SMS commands or the official ThingSys configuration tool as provided by the manufacturer.
- Knowledge of the device default password used in commands; the public sample uses 123456 as the default password.
- Basic GSM/GPRS coverage at the installation location to allow the tracker to register to the network.

## How This Tracker Connects to Plaspy

The TS-H1 is configured to report location and events to the shared Plaspy server endpoint and port so devices become visible on the Plaspy platform. Configuration directs the tracker to send its GPRS traffic to Plaspy, and Plaspy handles protocol identification and telemetry parsing automatically.

- The tracker sends location data and event messages over GPRS to d.plaspy.com or to the IP address 54.85.159.138.
- Traffic is sent to port 8888 which Plaspy uses for all supported devices.
- The device may use UDP or TCP as the transport; Plaspy supports both and auto detects the protocol.
- Once the device is reachable, Plaspy can display position updates and receive alerts sent by the tracker.
- Manufacturer features such as tamper alerts and position responses are reported to the same Plaspy server endpoint when configured.

## Common Configuration Workflow

1. Access the official ThingSys configuration method or software, or prepare to use SMS commands as provided by ThingSys.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.
3. Set the device port to 8888 to match Plaspy's public listening port.
4. Choose UDP or TCP if the TS-H1 requires an explicit transport selection.
5. Apply or save the configuration on the device and confirm settings have been accepted.
6. Restart the device if required by the manufacturer to activate network changes.
7. Validate that the device reports to Plaspy by checking device visibility in the platform and observing incoming location or event messages.

If you choose SMS configuration, use the public SMS commands in the order recommended by ThingSys and include the device password where required.

## Example Configuration Commands

The TS-H1 can be configured by sending SMS commands to the device. The following commands are the public examples provided by ThingSys. The sample device password shown in the public content is 123456 and is used in several commands. Replace the APN placeholders with the correct values for your SIM operator.

- Optional initial factory reset (use only when needed for initial setup)
```
FORMAT
```

- Set the operator APN
```
apn123456 {{apn}}
```
Explanation: replace {{apn}} with the APN string from your mobile operator.

- Set the APN username
```
apnuser123456 {{apnu}}
```
Explanation: replace {{apnu}} with the APN username if required by your operator. If not required, this can often be left blank.

- Set the APN password
```
apnpasswd123456 {{apnp}}
```
Explanation: replace {{apnp}} with the APN password if required by your operator.

- Set the GPRS server to Plaspy by IP and port
```
ip54.85.159.138 8888
```
Note: This public command sets the server to the Plaspy IP 54.85.159.138 and the shared Plaspy port 8888. You may also configure the device to use the domain d.plaspy.com if the device accepts a hostname instead of an IP.

- Check current settings
```
CXZT
```
Explanation: Use this verification command to request the device to return its current configuration settings.

Keep command order when it is important. Use the default password (123456) where it appears in example commands, and replace placeholders with your operator APN values.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options; verify the command set for your device firmware before applying changes.
- The TS-H1 public SMS commands show SMS based setup; some installations may prefer the official ThingSys configuration tool if available.
- Choose UDP or TCP based on your installation needs; Plaspy supports both and will detect the tracker protocol automatically.
- Always verify APN, APN username, and APN password values with the mobile operator to ensure GPRS connectivity.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration across fleets.

## Why Use Plaspy with This Configuration

Configuring the ThingSys TS-H1 to report to Plaspy provides a practical way to centralize location and event data from devices into a single monitoring platform. Using the shared Plaspy server settings and the public SMS commands lets technicians prepare devices for deployment and verify device connectivity quickly.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance for the TS H1, please verify current information on the ThingSys website https://www.thingsys.com/.
