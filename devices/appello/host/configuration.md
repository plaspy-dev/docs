---
slug: /appello/host/configuration
id: host-configuration
sidebar_label: Configuration
title: Appello - Host Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Appello Host tracker for use with Plaspy including SMS commands and server settings
keywords:
  - Appello Host configuration
  - Appello Host setup
  - Appello GPS tracker configuration
  - Appello Host Plaspy
  - Plaspy server settings
  - pet tracker configuration
  - GPS tracker SMS setup
  - GPRS APN setup
  - tracker server configuration
  - tracking platform integration
---

# Appello - Host Configuration

This page covers the public configuration context for using the Appello Host tracker with Plaspy. It explains the shared Plaspy server settings and shows practical, manufacturer‑provided setup commands where available so you can prepare the device to report location and status to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The Host tracker supports SMS based configuration in the public commands below and those examples should be adapted to your operator APN and credentials.

## Configuration Overview

The goal of configuring an Appello Host tracker for Plaspy is to point the device at Plaspy's collection endpoint, ensure data connectivity, and confirm the device appears in the Plaspy platform. Use the steps and commands below as a practical starting point and replace placeholders with your operator values where required.

- Point the tracker to the Plaspy server endpoint so it can forward location messages.
- Configure the device APN and GPRS server settings so the tracker has an active data path.
- Validate the device is sending periodic updates and that Plaspy receives them.
- Use the included SMS command examples to apply settings when a manufacturer tool is not available.
- Confirm device visibility and basic telemetry in Plaspy after applying configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: configure the tracker to use UDP or TCP on port 8888 depending on device options  
- Protocol detection: Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices so the port value is uniform across trackers.

## Typical Requirements Before Setup

- A charged tracker with access to the device's SMS configuration method or official configuration tool.  
- An active SIM card with mobile data and SMS enabled if using GPRS and SMS configuration.  
- APN, APN username, and APN password for the mobile operator to populate the [apn], [apnu], and [apnp] placeholders.  
- Access to the manufacturer's instructions or support channels for firmware specific behavior.  
- Basic knowledge of sending SMS commands to the device when using SMS configuration.  
- A Plaspy account or administrator who can confirm device presence in the Plaspy platform after configuration.

## How This Tracker Connects to Plaspy

When configured, the Appello Host sends its location and status messages to Plaspy by targeting the shared Plaspy server endpoint and port. Plaspy receives the messages and automatically detects the tracker protocol so no per-device protocol selection on the server side is required.

- The device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.  
- The tracker can use UDP or TCP transport depending on device firmware and selection.  
- Periodic updates are transmitted to the Plaspy endpoint for mapping and monitoring.  
- Plaspy processes the incoming data and makes the device visible in the platform for event reporting and monitoring.  
- Validation is done by confirming messages arrive and the tracker appears in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands if the device supports SMS setup.  
2. Enter the Plaspy server address by using the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.  
3. Set the network port to 8888 as the destination port used by Plaspy.  
4. Choose UDP or TCP on port 8888 if the tracker requires a transport selection.  
5. Configure the operator APN and any required APN credentials so the tracker can use mobile data.  
6. Apply or save the configuration and restart the device if the manufacturer recommends it.  
7. Validate that the device reports to Plaspy by checking device activity in the platform and confirming receipt of location updates.

## Example Configuration Commands

The Host tracker includes public SMS configuration commands. The examples below preserve the original command order and the default device password shown in the manufacturer content. Replace placeholders and credentials as needed before sending.

- Factory reset (optional initial step)
```text
format
```
Note: The factory reset command is optional and typically used only when required to clear prior settings.

- Set operator APN (replace placeholders with your operator values)
```text
00011,123456apn,[apn],[apnu],[apnp]
```
Explanation: replace [apn] with your mobile operator APN, [apnu] with the APN username if required, and [apnp] with the APN password if required. The command uses the device default password 123456 shown in the public configuration example.

- Set GPRS server to Plaspy by IP and port
```text
00011,123456ip,54.85.159.138,8888
```
Explanation: This points the tracker to Plaspy using the public server IP and the shared port 8888. You may alternatively enter d.plaspy.com if the device supports domain names.

- Set update interval to 60 seconds
```text
00011,123456t060s
```
Explanation: This example sets the tracker to send updates every 60 seconds. Adjust the interval according to your monitoring needs and device capabilities.

Send each SMS from the registered phone number or method required by the device. Keep the default password 123456 as shown in these examples unless you have changed it; update commands to use your device password if different.

## Configuration Notes

- Manufacturer tools and firmware versions may change the exact command syntax or available parameters; always confirm with the latest manufacturer documentation.  
- SMS based configuration is provided by the example commands but many deployments use the manufacturer's software or provisioning tools where available.  
- Choose UDP or TCP based on the device interface options; Plaspy accepts either transport on port 8888.  
- Replace APN placeholders [apn], [apnu], and [apnp] with operator values; missing or incorrect APN settings will prevent GPRS connectivity.  
- Consider changing the default device password after initial configuration to improve device security where supported.

## Why Use Plaspy with This Configuration

Using the Appello Host tracker with Plaspy provides a straightforward way to centralize location reports and device status on a single platform. Pointing the tracker at Plaspy's shared server endpoint and using the provided SMS commands or manufacturer tools helps establish predictable connectivity and visibility for monitoring, alerts, and operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific configuration steps, firmware behavior, and manufacturer recommendations on the official manufacturer site http://www.cnjeo.com/ as specifications and setup methods can change over time.
