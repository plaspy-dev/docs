---
slug: /cantrack/tk08al/configuration
id: tk08al-configuration
sidebar_label: Configuration
title: CanTrack - TK08AL Configuration
sidebar_class_name: menu_item_tracker
description: Configure the CanTrack TK08AL for Plaspy with shared server settings and practical setup guidance for fleet tracking
keywords:
  - CanTrack TK08AL configuration
  - CanTrack TK08AL setup
  - TK08AL Plaspy integration
  - CanTrack GPS tracker configuration
  - TK08AL server configuration
  - TK08AL fleet tracking setup
  - CanTrack tracking software configuration
  - TK08AL GPS platform setup
  - CanTrack vehicle tracker configuration
  - TK08AL telemetry configuration
---

# CanTrack - TK08AL Configuration

This page outlines the public configuration context for using the CanTrack TK08AL with Plaspy. It summarizes the practical server settings and workflow steps you will use to point a TK08AL at Plaspy so device telemetry and events arrive in your Plaspy fleet account. The information here is focused on public, manufacturer agnostic setup patterns and the shared Plaspy settings required for integration.

The TK08AL is Plaspy compatible out of the box and supports LTE Cat 1 plus GSM fallback for telemetry. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side configuration steps can vary depending on firmware, hardware revision, installation type, and the vendor configuration tool you use. Always compare this public guidance with the latest CanTrack documentation for firmware specific instructions.

## Configuration Overview

Preparing the TK08AL for Plaspy means configuring the device to send position and event data to the Plaspy server endpoint and confirming reliable telemetry delivery. The goal is to make the tracker visible in Plaspy quickly and repeatably while validating that movement, ignition, SOS, and power alarms are reported as expected.

- Set the device server or APN destination to the Plaspy endpoint so telemetry is routed to the platform.
- Choose the transport protocol the device supports and confirm it is accepted by Plaspy.
- Save and apply settings, then verify the device connects and sends initial position updates.
- Validate key events such as ignition, SOS, and power cut are visible in Plaspy after configuration.
- Confirm fallback and buffering behavior to ensure historical data is delivered after temporary connectivity loss.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the TK08AL:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the TK08AL has power and a functioning backup battery if present for power-cut reporting.
- Install an active SIM card with a data plan compatible with LTE Cat 1 and GSM fallback as needed.
- Obtain the manufacturer configuration method or software such as PC USB tool, SMS commands, or GPRS configuration channel supported by CanTrack.
- Ensure you have the device IMEI and any installer credentials needed by the CanTrack configuration utility.
- Verify antennas and wiring are correctly installed for stable GNSS and cellular reception.
- Have access to Plaspy account or device onboarding instructions if your deployment requires registration or asset mapping after connection.

## How This Tracker Connects to Plaspy

When configured for Plaspy the TK08AL sends location and event telemetry to the shared Plaspy endpoint and port. Plaspy ingests position updates, driver ID and event messages so fleet managers can monitor vehicles and receive alerts in real time.

- The tracker reports GPS positions and telemetry to d.plaspy.com using port 8888.
- Transport can be configured as UDP or TCP on the device and Plaspy accepts both transports.
- Plaspy automatically detects the tracker protocol so the platform can decode GT class telemetry from the TK08AL.
- Device events such as ignition, SOS, speeding, and power-cut are forwarded to Plaspy for alerting and reporting.
- Local buffering on the tracker holds records during outages and delivers them to the Plaspy server when connectivity is restored.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software appropriate for the TK08AL such as the PC USB tool, SMS, or GPRS configuration channel.
2. Verify the SIM and cellular connectivity and ensure GNSS reception is available for an initial fix.
3. Enter d.plaspy.com or 54.85.159.138 as the server address in the device settings.
4. Set the server port to 8888 as the destination port for telemetry.
5. If the device requires selecting transport, choose UDP or TCP based on your installation preference.
6. Apply or save the configuration and follow any manufacturer recommendations to write settings to nonvolatile memory.
7. Restart the TK08AL if required by the tool or firmware to activate the new server settings.
8. Validate that the device reports to Plaspy by checking for initial position updates and event messages in your Plaspy interface.

## Example Configuration Commands

There are multiple vendor supplied configuration channels for the TK08AL and the exact commands or GUI steps depend on firmware and the CanTrack configuration tool you use. Because model specific command sets vary, consult the CanTrack configuration manual for the exact SMS or serial commands used by your firmware revision. Typical public approaches include:

- Using the CanTrack PC configuration tool to set server and port fields to d.plaspy.com and 8888.
- Sending SMS configuration commands if supported by your firmware to set server, port, and transport.

For devices and firmware that accept SMS commands, placeholders are commonly used in examples such as [apn], [apnu], or [apnp]. These placeholders represent your mobile operator APN name, APN username, and APN password respectively and should be replaced with values provided by your SIM operator when required by the device.

## Configuration Notes

- Firmware differences can change exact menus, command syntax, and available transport options. Confirm commands with the manufacturer manual for your firmware.
- Choosing TCP versus UDP affects connection behavior; UDP can be lighter weight while TCP provides a persistent session depending on your network design.
- Plaspy uses the same port for all supported devices and automatically detects the protocol, so you only need to set the server and port once.
- If using SMS based setup, ensure SMS messages originate from a trusted management number if the device enforces command filters.
- Keep a record of applied settings and the device IMEI to assist troubleshooting if telemetry does not appear in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the TK08AL to report to Plaspy gives fleet operators consolidated visibility into vehicle location, driver identification, and safety events. The combination of robust LTE connectivity and the TK08AL feature set such as ignition detection, SOS alerts, and power-cut alarms makes it suitable for anti-theft, driver authorization, and operational monitoring when integrated into a central platform.

Learn more about how Plaspy can centralize telemetry and alerts for your fleet at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance consult CanTrack documentation at https://www.cantrackgps.com/ to verify setup details and command syntax.
