---
slug: /totemtech/at08/features
id: at08-features
sidebar_label: Features
title: Totemtech - AT08 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Totemtech AT08 magnetic GPS tracker and its compatibility with Plaspy for asset monitoring
keywords:
  - Totemtech AT08 features
  - Totemtech AT08 GPS tracker
  - AT08 Plaspy compatibility
  - magnetic GPS tracker
  - uBlox M8 GNSS
  - Quectel EG91 tracker
  - 4G LTE Cat 1 tracker
  - 4000 mAh battery tracker
  - asset monitoring tracker
  - fleet management tracker
---

# Totemtech - AT08 Features

This page provides a public feature overview for the Totemtech AT08 magnetic GPS tracker and explains how its capabilities are used with Plaspy for real‑time tracking and asset monitoring. It summarizes practical, non-sensitive device functions and how Plaspy consumes location and telemetry data to support fleet and logistics workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, or installation method. For device configuration, advanced settings, and the most current technical details consult the manufacturer documentation and release notes before deployment.

## Feature Overview

The AT08 is a rugged magnetic tracker designed for long duration deployments on metal assets. It combines multi constellation GNSS positioning, cellular connectivity, strong magnetic mounting, and a large battery to deliver location and telemetry to Plaspy for tracking, alerts, and reporting.

- Multi constellation GNSS with a uBlox M8 engine for GPS GLONASS and BeiDou positioning
- Multi band cellular connectivity including 3G and a 4G LTE Cat 1 variant for broad coverage
- Large 4000 mAh Li‑polymer battery and smart power management for extended operation on remote assets
- Strong neodymium magnets and compact form factor for discreet attachment to metal surfaces
- 3D tremble motion sensor for movement and tamper detection feeding into platform alerts
- OTA firmware update support to simplify remote maintenance and compatibility management

## Core Features of Totemtech - AT08

- GNSS positioning using the uBlox M8 engine supporting GPS GLONASS and BeiDou
- Multi band cellular modem with a 4G LTE Cat 1 option using Quectel EG91 on compatible variants
- 4000 mAh Li‑polymer battery with reported long runtime at common reporting intervals
- Rugged magnetic housing with two strong neodymium magnets for metal mounting
- 3D tremble sensor for motion detection and tamper/movement events
- STM32 based low power architecture and configurable power modes for extended deployments
- Micro USB interface for charging and local configuration and a standard SIM card slot
- OTA firmware update capability for remote maintenance and firmware improvements

## How These Features Work with Plaspy

Plaspy ingests the AT08 location and device telemetry to provide live maps, event visibility, and historical reporting for asset management and security workflows. When the device reports location, battery or motion events, Plaspy surfaces those signals for operations teams to act on.

- Real time location on maps using GNSS coordinates and fix quality from the device
- Battery level and charging status shown in device dashboards for maintenance planning
- Motion and tamper events from the 3D tremble sensor trigger alerts and notifications
- Historical tracks and reports built from periodic position uploads for utilization and recovery analysis
- OTA firmware status and device telemetry visible in Plaspy to assist large scale rollouts
- Plaspy automatically detects supported tracker protocols so devices can begin reporting with minimal platform configuration

## Typical Use Cases

- Long duration asset monitoring for containers, trailers, and cargo where discreet magnetic mounting is required
- Fleet logistics for tracking trailer locations and supporting routing or utilization reports
- Anti theft monitoring and rapid recovery using motion alerts and continuous telemetry
- Monitoring seasonal or intermittently used equipment that benefits from long battery life and rugged housing
- Tracking portable metal assets or equipment where non permanent mounting is preferred
- Remote deployments that require OTA firmware updates and remote fleet maintenance

## Feature Availability Notes

- Feature sets may differ between hardware revisions and regional variants of the AT08; band support and modem options vary by model
- Firmware versions change behavior for power management, reporting intervals, and OTA update procedures
- Installation and mounting affect GPS reception and battery life; metal mounting simplifies attachment but may require placement testing for optimal GNSS fixes
- Manufacturer customization and optional accessories can alter capabilities available to Plaspy
- Always confirm required inputs and outputs for your operational workflows with the device documentation before large scale deployment

## Why Use Plaspy with These Features

Using the AT08 with Plaspy brings the device's long battery life, rugged mounting, and multi constellation GNSS into a managed platform that emphasizes visibility and operational oversight. Plaspy captures location, motion, and battery telemetry so teams can monitor assets, receive alerts for unusual movement, and review historical routes and device health for maintenance planning.

Learn more about how Plaspy can help you manage AT08 trackers and similar devices at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time, so please verify the latest specifications and instructions on the official manufacturer website http://www.totemtek.com/.
