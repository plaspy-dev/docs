---
slug: /autofon//configuration
id: -configuration
sidebar_label: Configuration
title: AutoFon - Термо Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for integrating the AutoFon Термо heater controller with Plaspy fleet workflows and telemetry
keywords:
  - AutoFon Термо configuration
  - AutoFon Термо setup
  - AutoFon Термо Plaspy
  - AutoFon heater module configuration
  - AutoFon Thermo setup guide
  - AutoFon heater integration
  - AutoFon Термо telemetry
  - Plaspy tracker configuration
  - Plaspy heater integration
  - GPS tracker platform setup
---

# AutoFon - Термо Configuration

This page documents the public configuration context for using the AutoFon Термо heater controller with Plaspy. It explains the practical server settings, typical preparatory steps, and workflow considerations needed when you plan to include AutoFon Термо events and controls in Plaspy-managed telematics or when the unit is used alongside a Plaspy-compatible GPS tracker.

AutoFon-Thermo is a GSM-based heater controller rather than a standalone GNSS tracker. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Follow the guidance below as a public integration reference and verify any device-specific steps with the official manufacturer documentation.

## Configuration Overview

The goal of configuring AutoFon Термо for use with Plaspy is to ensure heater control events and telemetry are visible and actionable within your fleet workflows. This includes preparing the device to communicate with Plaspy, confirming connectivity, and verifying that events are recorded in the platform when the Thermo is used either directly or in combination with a Plaspy-compatible GPS tracker.

- Ensure the module is installed and powered correctly as part of the vehicle or heater wiring.
- Provide a working GSM connection and any required SIM provisioning for remote SMS or voice operations.
- Point any network-reporting capability (when available) to Plaspy’s shared server endpoint so events can be associated with vehicles in Plaspy.
- Validate that events such as remote starts, timer activations, and manual button presses are logged or relayed to Plaspy workflows.
- Confirm that a Plaspy account or fleet project is ready to receive and map heater events to the correct vehicle records.

## Plaspy Server Settings

Use these public Plaspy settings when the device or companion tracker requires a server endpoint:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept either transport

Plaspy uses the same port for all supported devices and will auto-detect the tracker protocol at the platform side.

## Typical Requirements Before Setup

- Device installed and powered according to the manufacturer instructions and wired into the auxiliary heater control circuit.
- Active GSM SIM card with adequate signal and any required SMS or voice service enabled for remote control and notifications.
- Access to the official AutoFon configuration method, user manual, or installer tool for device setup.
- A Plaspy account or fleet project configured to receive device events and map them to vehicles.
- Physical access to the unit or vehicle for initial testing and verification after configuration.
- Knowledge of the vehicle wiring and how the Thermo integrates with your aftermarket heater (installer or qualified technician recommended).

## How This Tracker Connects to Plaspy

AutoFon Термо functions primarily as a GSM heater controller and augments Plaspy workflows by providing heater control events and schedule information. When integrated or paired with a Plaspy-compatible GPS tracker, the Thermo’s events are recorded alongside location and other telemetry in Plaspy.

- Heater start and stop commands issued by SMS or voice menu can be logged in Plaspy workflows.
- Programmable timers and scheduled pre-heating events create predictable logs that Plaspy can display in reports.
- Local cabin button presses and remote commands coexist; both event types can be recorded for operational auditing.
- When the manufacturer-side setup allows network reporting, configure the endpoint to d.plaspy.com or 54.85.159.138 on port 8888 so events are routed into Plaspy.
- Plaspy’s automatic protocol detection means you can select UDP or TCP during device configuration as required by the device or installer tool.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or installer software described in the manufacturer documentation.
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or alternatively 54.85.159.138 in the device network/server settings.
3. Set the device to use port 8888 for reporting to Plaspy.
4. Choose the transport protocol UDP or TCP if the device firmware or configuration tool requires an explicit selection.
5. Apply or save the configuration in the manufacturer tool and confirm that settings have been written to the unit.
6. Restart or power-cycle the device if required by the manufacturer to activate new network settings.
7. Validate that the device reports to Plaspy and that events appear in the correct vehicle record in your Plaspy project.

## Example Configuration Commands

The manufacturer configuration method for AutoFon Термо can vary by firmware or installer tool. Because model-specific command syntax is not included here, exact commands depend on the AutoFon configuration interface you use. Typical commercial installers use a configuration application, SMS commands, or a serial/USB tool to program network settings.

If you have device-specific command examples from the manufacturer or installer tool, preserve placeholders such as {{apn}} or {{apnu}} when entering APN information and follow the tool's syntax. For verification of event reporting, use the manufacturer or installer verification steps to confirm that the device is reachable and that Plaspy receives test events.

## Configuration Notes

- AutoFon-Термо is primarily a GSM heater controller; confirm whether your specific unit supports direct network reporting to a server before attempting TCP/UDP configuration.
- Differences in firmware, hardware revision, or local market variants can change available configuration options and supported commands.
- Choose UDP or TCP based on the device configuration interface and network reliability considerations; Plaspy accepts either and will auto-detect the protocol.
- Because the device is discontinued and may be out of stock, verify replacement options or alternative integration approaches with your installer or Plaspy support.
- Always consult the official AutoFon documentation for exact command syntax and any SMS/voice-menu setup details.

## Why Use Plaspy with This Configuration

Using AutoFon Термо in conjunction with Plaspy gives fleets and operators an integrated view of heater activity alongside vehicle tracking and telemetry. This combination helps reduce unplanned idling, improve driver comfort and readiness, and create actionable event histories that can be used for scheduling and maintenance planning.

To learn more about how Plaspy can support heater control workflows and fleet telemetry, visit https://www.plaspy.com. For the most current device-specific setup details, firmware behavior, and manufacturer instructions, verify information on the official AutoFon website https://www.autofon.ru/.
