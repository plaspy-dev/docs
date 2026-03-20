---
slug: /topfly/tld2_l/configuration
id: tld2_l-configuration
sidebar_label: Configuration
title: TopFly - TLD2-L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly TLD2-L with Plaspy server settings and SMS commands for quick OBDII installation
keywords:
  - TopFly TLD2-L configuration
  - TopFly TLD2-L setup
  - TopFly TLD2-L Plaspy
  - TopFly GPS tracker configuration
  - OBDII tracker setup
  - vehicle tracker Plaspy compatibility
  - TLD2-L server configuration
  - TLD2-L SMS setup
  - fleet tracking setup
  - GPS tracker configuration guide
---

# TopFly - TLD2-L Configuration

This page covers the public configuration context for using the TopFly TLD2-L OBDII tracker with Plaspy. It focuses on the practical server settings, common setup steps, and the SMS commands that are published for configuring the device to report to Plaspy. The material here is intended to help technicians and fleet administrators prepare the device for integration with Plaspy while relying on manufacturer tooling for device‑level changes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TLD2-L is a plug and play OBDII tracker with cellular connectivity and SMS command support, so this page combines the Plaspy server requirements with the device's published SMS configuration flow to give a practical setup reference.

## Configuration Overview

The configuration process prepares the TLD2-L so it can send GNSS fixes, telemetry, and event data to Plaspy reliably. For the TLD2-L this typically means setting the correct APN for the installed SIM, configuring the Plaspy server endpoint and port, and setting reporting intervals and timezone so data appears correctly in the platform.

- Set the tracker APN and credentials so cellular data can be used for telemetry.
- Point the device to the Plaspy server endpoint and port so data arrives at d.plaspy.com / 54.85.159.138 on port 8888.
- Configure reporting intervals and timers to match your monitoring needs and data plan.
- Verify network connectivity and that the tracker registers with Plaspy after applying settings.
- Confirm that device events such as ignition, accelerometer alerts, and BLE sensor telemetry are visible in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

All devices in Plaspy use the same port, and Plaspy performs automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- Physical access to the vehicle OBDII port for installation and to confirm device power.
- A working SIM card inserted in the tracker with a data plan and correct APN information.
- Ability to send SMS commands to the tracker if using SMS provisioning, or access to the official manufacturer configuration tool if available.
- Knowledge of the device SMS password; the published default password for the sample commands below is 0000.
- Manufacturer documentation or support resources on hand for firmware specific instructions and recovery steps.
- A test account or access to Plaspy so you can validate the device reports after configuration.

## How This Tracker Connects to Plaspy

When configured, the TLD2-L sends its location fixes and telemetry to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform. Plaspy ingests GNSS fixes, accelerometer events, and other telemetry for mapping, alerts, and analytics.

- The tracker reports GNSS position updates and scheduled telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry is delivered over the chosen transport (UDP or TCP) and Plaspy automatically detects protocol specifics on receipt.
- Accelerometer events, ignition and disconnection alerts, and BLE sensor telemetry are forwarded to Plaspy for mapping and alerts.
- Onboard buffering allows the device to store points and upload them when network connectivity resumes so Plaspy retains continuity.
- Successful configuration results in the tracker appearing in the Plaspy device list and sending live updates according to the configured timer.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the TLD2-L such as SMS provisioning or the vendor configuration tool documented by TopFly.
2. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 according to the device tool you are using.
3. Set the server port to 8888.
4. If the device requires transport selection, choose either UDP or TCP based on your network preference or installer guidance.
5. Set the device APN and credentials so the tracker can use GPRS or LTE data.
6. Apply or save the configuration and, if required, restart the device to ensure settings take effect.
7. Validate that the device reports to Plaspy by checking device presence and recent location updates in the Plaspy platform.

## Example Configuration Commands

The TLD2-L can be configured using SMS commands. The following example commands are the published public SMS syntax for initial configuration. The sample setup uses the default SMS password 0000 in these examples.

- Set the timezone to UTC 0
```text
GMT,0000,0#
```

- Set the APN. Replace {{apn}}, {{apnu}}, and {{apnp}} with your SIM operator APN name, username, and password as required
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
(Explanation: {{apn}} is the APN name supplied by the mobile operator. {{apnu}} and {{apnp}} are optional APN username and password fields. Keep the braces as placeholders and replace them with your operator values.)

- Set the GPRS server to the Plaspy server IP and port
```text
IP,0000,54.85.159.138 8888#
```
(Explanation: this command points the device at Plaspy using the published server IP and the required port 8888.)

- Set the reporting timer to 60 seconds
```text
TIMER,0000,60:60:0:0#
```
(Explanation: this example sets scheduled reporting intervals. Confirm timer format and behavior with TopFly documentation for your firmware version.)

Note: The commands above reflect published SMS provisioning examples. If your vendor tool requires different syntax or supports using domain names instead of IP addresses, follow the official TopFly instructions.

## Configuration Notes

- SMS provisioning is supported in the public commands shown; follow TopFly documentation for SMS delivery requirements and timing between commands.
- Firmware and hardware revisions can change command syntax, supported parameters, or behavior. Always verify commands against the device firmware version in use.
- Choose UDP or TCP based on network policies and reliability needs. The tracker may offer both options; Plaspy will accept data over either transport on port 8888.
- The sample SMS commands use the public default password 0000. Change device passwords where supported and manage credentials per your security policy.
- Manufacturer tools or a configuration portal may provide a simpler workflow for large scale deployments; consult TopFly resources for bulk provisioning options.

## Why Use Plaspy with This Configuration

Configuring the TopFly TLD2-L to report to Plaspy gives fleets and operators a straightforward path to continuous location and telemetry visibility. Because the TLD2-L supports frequent reporting, accelerometer events, BLE sensors, and on device buffering, it pairs well with Plaspy to provide live maps, behavior analytics, and operational alerts that help improve routing, safety, and asset protection.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and manufacturer guidance for the TLD2-L, verify information on the official TopFly website https://www.topflytech.com/ as manufacturer instructions and firmware behavior can change over time.
