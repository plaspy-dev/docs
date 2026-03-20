---
slug: /topshine/tk103r/configuration
id: tk103r-configuration
sidebar_label: Configuration
title: TopShine - TK103R Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine TK103R showing Plaspy server settings and SMS commands for GPRS integration
keywords:
  - TopShine TK103R configuration
  - TopShine TK103R setup
  - TopShine TK103R Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - server configuration for TK103R
  - TK103R GPRS setup
  - TK103R SMS commands
  - fleet tracking TopShine
---

# TopShine - TK103R Configuration

This page provides the public configuration context for using the TopShine TK103R with Plaspy. It collects the practical, publicly available setup information you need to point the TK103R at Plaspy servers, including SMS command examples provided by the manufacturer and the Plaspy server values required for GPRS reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The TK103R supports SMS and GPRS configuration methods in public documentation, so this guide explains the typical flow and preserves manufacturer SMS command templates where provided.

## Configuration Overview

The goal of configuring the TK103R for Plaspy is to prepare the device to send position and event data to the Plaspy platform so the tracker appears and reports correctly in your Plaspy account. The manufacturer provides SMS commands to set APN, server, and reporting mode; these can be used during initial installation or troubleshooting.

- Configure the device to use Plaspy as its GPRS reporting server so location updates reach the platform.
- Set the operator APN and, if required, APN username and password so the device has mobile data access.
- Validate connectivity and reporting with a test message or by checking device visibility in Plaspy.
- Use the device IMEI as the primary identifier when registering or troubleshooting on Plaspy.
- Preserve manufacturer SMS commands and default password information during setup for recovery and repeatable installs.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoint settings to use when pointing the TK103R at Plaspy. The device may be configured to use either UDP or TCP on port 8888.

## Typical Requirements Before Setup

- A stable power source to the TK103R for configuration and testing.
- A SIM card with an active data plan and SMS capability configured with the correct APN for the mobile operator.
- Access to the device IMEI (often available on the device label or via a verification SMS command).
- Knowledge of the device default SMS password for commands (manufacturer example uses 000000).
- Access to the manufacturer configuration method such as SMS command interface or official configuration tool.
- A method to test reporting such as viewing the device in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The TK103R can be configured to send location and event data to Plaspy over GPRS. Once the device is pointed at the Plaspy server endpoint and allowed mobile data access, Plaspy will receive the device telemetry and present it in the platform.

- The tracker reports to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Plaspy receives device connections on the same port for all supported devices and automatically detects the protocol.
- The TK103R can send periodic location updates and alarm events to Plaspy once GPRS mode and server settings are applied.
- Events such as movement alerts, door or ignition alerts, and geofence triggers are sent as device messages to the configured server.
- Platform visibility is achieved after the device completes initial registration and begins regular reporting to Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor configuration tool as documented by TopShine.
2. Determine the device IMEI and the installer or device password (the manufacturer example uses 000000 as the default password).
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the server configuration field.
4. Set the port to 8888 and choose UDP or TCP if the device requires manual transport selection.
5. Configure the operator APN including APN username and password if required, then apply or save the configuration.
6. Restart or power cycle the device if recommended by the manufacturer to activate GPRS settings.
7. Validate the device reports to Plaspy by checking the device list and recent positions in Plaspy.

## Example Configuration Commands

The manufacturer provides SMS command templates for the TK103R. The sample commands below use the device default password 000000. Keep placeholders as shown and replace them with actual values for your installation.

1. Optional initial factory reset (use only if you need to reset the device to factory defaults):
```
W000000,990,099###
```
2. Set the device ID using the first 14 digits of the IMEI (manufacturer template). Replace <IMEI14> with the first 14 digits of the device IMEI. Note that Plaspy identifies devices by the full 15 digit IMEI when registering devices in the platform.
```
W000000,010,<IMEI14>
```
3. Set the operator APN. Replace {{apn}} with your operator APN and include {{apnu}} and {{apnp}} only if your operator requires an APN username or password. Keep the placeholders if you plan to substitute values later.
```
W000000,011,{{apn}}[,{{apnu}},{{apnp}}]
```
(If your APN requires username and password, include them separated by commas. If not, send only the APN field.)

4. Set the GPRS server to point the device to Plaspy. This uses the Plaspy server IP and port.
```
W000000,012,54.85.159.138,8888
```
5. Switch the device to GPRS mode (this command enables data reporting mode on many TK103R firmwares):
```
W000000,013,2
```
6. Set the update/reporting interval (example uses interval value 6 as per manufacturer sample; adjust according to your needs):
```
W000000,014,6
```
7. Query device IMEI (verification command to request the device IMEI via SMS):
```
W000000,601
```

Placeholders explained:
- {{apn}} — the mobile operator APN string required for data connection.
- {{apnu}} — optional APN username if the operator requires one.
- {{apnp}} — optional APN password if the operator requires one.
- <IMEI14> — first 14 digits of the device IMEI as required by the manufacturer command template. Use the full 15 digit IMEI when registering the device on Plaspy.

## Configuration Notes

- Manufacturer SMS commands and parameter order can vary by firmware version. Always confirm command formats with the device manual for your firmware release.
- The TK103R supports both SMS based and GPRS based configuration paths. Use SMS commands when you do not have access to a configuration tool or while the device is offline from data.
- When selecting transport, UDP and TCP are both supported for reporting to Plaspy. Test both if connectivity issues occur; Plaspy will automatically detect the tracker protocol.
- Plaspy uses the same port for all devices, so set port 8888 on the device when pointing to Plaspy.
- Keep a record of the device IMEI and the SMS password used during configuration to aid future maintenance and troubleshooting.

## Why Use Plaspy with This Configuration

Using the TopShine TK103R configured to report to Plaspy gives organizations reliable visibility into vehicle location and event reporting through a single shared server endpoint. With the device pointed to Plaspy, fleet managers and vehicle owners can centralize tracking, monitor alerts, and maintain operational oversight without managing many per-device server settings.

If you want to learn more about how Plaspy handles device connections and to see platform capabilities, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation details for the TopShine TK103R, verify current information with the manufacturer at https://www.gztopshine.com/ as device behavior and configuration methods can change over time.
