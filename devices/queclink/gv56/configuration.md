---
slug: /queclink/gv56/configuration
id: gv56-configuration
sidebar_label: Configuration
title: QuecLink - GV56 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV56 integration with Plaspy including server settings and example SMS commands
keywords:
  - QuecLink GV56 configuration
  - QuecLink GV56 setup
  - GV56 Plaspy configuration
  - Plaspy GPS tracker setup
  - QuecLink server configuration
  - GV56 SMS setup
  - GV56 APN settings
  - GV56 GPRS configuration
  - fleet tracking GV56
  - vehicle GPS tracker setup
---

# QuecLink - GV56 Configuration

This page documents the public configuration context for using the QuecLink GV56 tracker with the Plaspy platform. It focuses on the Plaspy server settings you must apply and practical setup guidance based on publicly available commands and workflow steps so the GV56 can report to Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The sample SMS commands shown on this page reflect common public setup flows and should be used as a practical reference alongside official QuecLink documentation.

## Configuration Overview

Preparing a GV56 for use with Plaspy is about configuring the device to send GNSS and event data to Plaspy's shared server endpoint, validating connectivity, and enabling the necessary reporting intervals and inputs so the platform can display and act on device telemetry.

- Configure the GV56 to report to the Plaspy server endpoint so position and event messages reach Plaspy.
- Ensure mobile connectivity and APN settings are correct so GPRS transport is available.
- Set reporting intervals and event inputs so the platform receives timely position and alarm updates.
- Validate visibility in Plaspy after configuration to confirm protocol and port detection.
- Use the provided public SMS commands as an example configuration method for initial setup or recovery.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and will detect the device protocol automatically once the device sends data to the server endpoint above.

## Typical Requirements Before Setup

- A powered GV56 with access to its SMS or manufacturer configuration interface.
- An active SIM card with data enabled and correct APN credentials for the network operator.
- Access to the manufacturer configuration method or software (SMS commands, PC tool, or OEM tool) to set APN and server parameters.
- The sample device password may be required for SMS configuration; the public example uses the password queclink.
- Basic knowledge of the desired reporting interval and which inputs (SOS, ignition, analog) should be enabled for your deployment.
- A method to observe device connection attempts and verify that Plaspy is receiving the device (Plaspy device list or server logs).

## How This Tracker Connects to Plaspy

The GV56 sends GNSS positions and event-driven messages over the cellular network to the Plaspy server endpoint and port. Once configured to target d.plaspy.com (or the server IP), the device uses GPRS transport to open a TCP or UDP session and stream data so Plaspy can display location, alarms, and telemetry in real time.

- Periodic position reports are sent to the Plaspy server endpoint and port to maintain location visibility.
- Event messages such as SOS, ignition changes, or alarm triggers are forwarded to Plaspy for immediate processing.
- Telemetry like analog input or input state changes is included in messages so Plaspy can map them to dashboards and rules.
- The GV56 is configured to report to the shared Plaspy server endpoint (d.plaspy.com / 54.85.159.138) on port 8888.
- Plaspy automatically detects the tracker protocol, so manual protocol selection on the platform is not required.

## Common Configuration Workflow

1. Access the official QuecLink configuration method recommended for your device and firmware (SMS commands, OEM tool, or vendor software).  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.  
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.  
5. Configure APN and any required operator credentials, then apply or save the configuration.  
6. Restart the device if required by the manufacturer to apply SMS or software settings.  
7. Validate that the device reports to Plaspy by confirming it appears online in Plaspy and that positions and events are received.

If your installer method is SMS based, apply the commands in the order required by the device and confirm the device accepts each command before proceeding.

## Example Configuration Commands

The GV56 can be configured via SMS using the device password. The following public example commands are shown in the same order as provided in the device documentation. The sample setup uses the device password queclink as the command password. Use these commands through the official manufacturer SMS interface only.

1. Optional initial step — restore factory settings (only if a factory reset is required)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restores factory defaults. Label this optional and use it only when you need to reset device settings.

2. Set the time zone to UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Sets device time zone. Adjust parameters if your deployment requires a different offset.

3. Set the operator APN
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Replace the placeholders:
  - {{apn}} = APN name for the SIM operator
  - {{apnu}} = APN username (if required by the operator)
  - {{apnp}} = APN password (if required)
- If the operator does not require username or password, leave those placeholders empty according to the device command format.

4. Set the GPRS server and ports for Plaspy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command configures the device to use d.plaspy.com and the server IP 54.85.159.138 with port 8888. It includes both domain and IP entries and sets the transport configuration per the device command syntax. The device may use either TCP or UDP on port 8888 depending on the transport setting.

5. Set the update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Configures the regular reporting interval to 60 seconds. Adjust values if you need a different reporting cadence.

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Enables SOS reporting assigned to the specified input. Modify as needed for your wiring and input assignments.

Note: Keep the device password correct for SMS commands. The example uses queclink as the password; your device may have a different password provisioned by the vendor.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and supported parameters; always verify commands against the device firmware version you have.
- The GV56 supports both SMS-based configuration and vendor tools; choose the method that matches your operational practice and installer permissions.
- When selecting TCP versus UDP, consider your network and server requirements; Plaspy accepts either transport on port 8888 and will auto-detect the protocol.
- All Plaspy devices use the same port 8888 so consistent port configuration simplifies fleet provisioning.
- Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when preparing SMS commands and replace them with your operator credentials as required.

## Why Use Plaspy with This Configuration

Using the QuecLink GV56 with Plaspy provides fleet operators with compact, reliable telemetry for real time visibility, event monitoring, and automated workflows. The GV56's inputs and sensor support allow Plaspy to map ignition, analog sensor data, and alarms into actionable dashboards and reports for operational oversight and incident response.

Learn more about Plaspy and how it manages device connections and telematics workflows at https://www.plaspy.com. For the latest device specific configuration instructions, firmware notes, and command references consult the manufacturer documentation at https://www.queclink.com/ to verify details for your hardware and firmware version.
